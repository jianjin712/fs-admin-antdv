<template>
  <pre class="fs-highlight hljs" v-html="highlightHTML"></pre>
</template>

<script>
// 相关文档
// https://highlightjs.org/usage/
// http://highlightjs.readthedocs.io/en/latest/api.html#configure-options
import highlight from "highlight.js";
import "../highlight-styles/github-gist.css";
import htmlFormat from "./libs/htmlFormat";
export default {
  name: "FsHighlight",
  props: {
    code: {
      type: String,
      required: false,
      default: ""
    },
    formatHtml: {
      type: Boolean,
      required: false,
      default: false
    },
    lang: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      highlightHTML: ""
    };
  },
  watch: {
    code() {
      this.highlight();
    }
  },
  mounted() {
    this.highlight();
  },
  methods: {
    highlight() {
      const code = this.formatHtml ? htmlFormat(this.code) : this.code;
      this.highlightHTML = highlight.highlightAuto(code, [
        this.lang,
        "html",
        "javascript",
        "json",
        "css",
        "scss",
        "less"
      ]).value;
    }
  }
};
</script>

<style lang="less">
.fs-highlight {
  margin: 0px;
  border-radius: 4px;
}
</style>
