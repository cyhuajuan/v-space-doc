import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "VSpace",
      social: {
        github: "https://github.com/cyhuajuan/v-space",
      },
      favicon: "favicon.png",
      sidebar: [
        {
          label: "使用指南",
          autogenerate: { directory: "guides" },
        },
      ],
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "google-site-verification",
            content: "IgFogqxCfdPeTRPTgPfEPtUGjDs7ZlAlO-4hqeKFKW4",
          },
        },
      ],
    }),
  ],
});
