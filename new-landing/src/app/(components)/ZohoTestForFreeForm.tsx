import { useEffect } from "react";

declare const ZFAdvLead: any;
declare const zfutm_zfAdvLead: any;
declare const ZFLead: any;
declare const zfutm_zfLead: any;

const ZohoTestForFreeForm = () => {
  useEffect(() => {
    const container = document.getElementById("zoho-form-container");

    // 🛑 Prevent duplicate iframes
    if (!container || container.querySelector("iframe")) return;

    const f = document.createElement("iframe");
    let ifrmSrc =
      "https://forms.zohopublic.eu/genezio1/form/TestYourAIforFree/formperma/7r9kbIYFDTToibtE6O9zjiYmrZjLizCGU-pcXLB_gCI?zf_rszfm=1";

    try {
      if (typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined") {
        for (let prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
          let utmPm = ZFAdvLead.utmPNameArr[prmIdx];
          utmPm =
            ZFAdvLead.isSameDomian && ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1
              ? "zf_" + utmPm
              : utmPm;
          let utmVal = zfutm_zfAdvLead.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
          if (utmVal) {
            ifrmSrc += (ifrmSrc.includes("?") ? "&" : "?") + utmPm + "=" + utmVal;
          }
        }
      }

      if (typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined") {
        for (let prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
          let utmPm = ZFLead.utmPNameArr[prmIdx];
          let utmVal = zfutm_zfLead.zfutm_gC_enc(ZFLead.utmPNameArr[prmIdx]);
          if (utmVal) {
            ifrmSrc += (ifrmSrc.includes("?") ? "&" : "?") + utmPm + "=" + utmVal;
          }
        }
      }
    } catch (e) {
      console.error(e);
    }

    f.src = ifrmSrc;
    f.style.border = "none";
    f.style.height = "650px";
    f.style.width = "100%";
    f.setAttribute("aria-label", "Test Your AI for Free");

    container.appendChild(f);

    const handleMessage = (event) => {
      const evntData = event.data;
      if (evntData && typeof evntData === "string") {
        const zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0];
          const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
          const iframe = container?.getElementsByTagName("iframe")[0];
          if (iframe?.src.includes("formperma") && iframe.src.includes(zf_perma)) {
            const prevIframeHeight = iframe.style.height;
            const zf_tout = zf_ifrm_data.length === 3;
            if (prevIframeHeight !== zf_ifrm_ht_nw) {
              if (zf_tout) {
                setTimeout(() => {
                  iframe.style.height = zf_ifrm_ht_nw;
                }, 500);
              } else {
                iframe.style.height = zf_ifrm_ht_nw;
              }
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <div id="zoho-form-container" />;
};

export default ZohoTestForFreeForm;
