<template>
    <div class="font-mono bg-primary dark:bg-gray-900 transition-all duration-300">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
    useHead({
      meta: [
        { name: "title", content: 'Web developer portfolio - Filip Szczęch' },
        { name: "description", content: 'Web developer portfolio created in nuxt, including cv, skills and projects.' },
        { property: 'og:url', content: 'https://www.filipszczech-dev.pl/' },
        { property: 'og:title', content: 'Web developer portfolio - Filip Szczęch' },
        { property: 'og:description', content: 'Web developer portfolio created in nuxt, including cv, skills and projects.' },
        { property: 'og:image', content: 'https://wrwtorrdungvuhnltrxj.supabase.co/storage/v1/object/public/webdev%20portfolio/portfolio6.png' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: 'Web developer portfolio - Filip Szczęch' },
        { name: 'twitter:description', content: 'Web developer portfolio created in nuxt, including cv, skills and projects.' },
        { name: 'twitter:image', content: 'https://wrwtorrdungvuhnltrxj.supabase.co/storage/v1/object/public/webdev%20portfolio/portfolio6.png' },
        { name: 'twitter:card', content: '' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
        htmlAttrs: {
            lang: 'pl'
        },
        link: [
            {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
            }
        ],
        // script: [
        // {
        // children: `
        //     window.SnipcartSettings = {
        //     publicApiKey: 'MGQ3MDg0YzctYjAxNS00ZWI1LTgyMzAtOWM1M2FhOGY0ODBiNjM4Nzg3NjIyNDY5NDM0MTEz',
        //     loadStrategy: 'on-user-interaction',
        //     modalStyle: "side",
        //     };

        //     (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector(\`src[src^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][src$="snipcart.js"]\`),n=document.querySelector(\`link[href^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][href$="snipcart.css"]\`);e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=\`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.js\`,i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=\`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.css\`,t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){!f||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
        // `,
        // type: "text/javascript"
        // }
        // ],
    });
</script>

<!-- <style>
  .page-enter-active,
  .page-leave-active {
      transition: all 0.5s;
  }
  .page-enter-from,
  .page-leave-to {
      opacity: 0;
      transform: translateX(100px);
  }
</style> -->
