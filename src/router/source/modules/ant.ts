import LayoutPass from "/@/layout/layout-pass.vue";

export const antResources = [
  {
    title: "蚂蚁示例",
    name: "ant",
    path: "/ant",
    redirect: "/ant/form",
    component: LayoutPass,
    meta: {
      icon: "ion:settings-outline",
      permission: "ant"
    },
    children: [
      {
        title: "表单示例",
        name: "form",
        path: "/ant/form",
        redirect: "/ant/form/baseform",
        meta: {
          icon: "ion:FormOutlined",
          //需要校验权限
          permission: "ant:form"
        },
        children: [
          {
            title: "基础表单",
            name: "baseform",
            path: "/ant/form/baseform",
            meta: {
              icon: "ion:ribbon-outline",
              //需要校验权限
              permission: "ant:form:baseform:view"
            },
            component: "/ant/form/baseform/index.vue"
          }
        ]
      }
    ]
  }
];
