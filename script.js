/* ==========================================================
   WED-004 — MIDNIGHT POST

   غيّر بيانات الزبون هنا فقط
========================================================== */

const WEDDING = {

  /* ========================================================
     COUPLE
  ======================================================== */

  groom:
    "يوسف",

  bride:
    "رنا",


  groomEnglish:
    "YOUSSEF",

  brideEnglish:
    "RANA",


  groomInitial:
    "Y",

  brideInitial:
    "R",


  /* ========================================================
     FAMILIES
  ======================================================== */

  groomFather:
    "السيد ناظم كريم",

  brideFather:
    "السيد مازن عبدالله",


  /* ========================================================
     EVENT
  ======================================================== */

  startAt:
    "2027-10-14T19:00:00+03:00",

  durationHours:
    3,

  timeZone:
    "Asia/Baghdad",


  /* ========================================================
     VENUE
  ======================================================== */

  venue:
    "قاعة مونارك",

  city:
    "الموصل",

  address:
    "الموصل - نينوى - العراق",


  /* ========================================================
     GOOGLE MAPS
  ======================================================== */

  mapsUrl:
    "",


  /* ========================================================
     FINAL WEBSITE URL
  ======================================================== */

  shareUrl:
    "",


  /* ========================================================
     PAGE
  ======================================================== */

  title:
    "دعوة زفاف يوسف ورنا",


  /* ========================================================
     TEXT
  ======================================================== */

  heroMessage:
    "في ليلة يجتمع فيها الأحبة لتبدأ حكاية عمر جديدة",


  invitationText:
    "بكل السرور تتشرف عائلة السيد ناظم كريم وعائلة السيد مازن عبدالله بدعوتكم لمشاركتهما فرحة زفاف يوسف ورنا في ليلة يجتمع فيها الأحبة لتبدأ حكاية عمر جديدة. حضوركم أجمل ما يضاف إلى هذه الليلة.",


  /* ========================================================
     OPENING SESSION
  ======================================================== */

  openingStorageKey:
    "WED004_MIDNIGHT_POST_OPENED"

};



/* ==========================================================
   DOM HELPERS
========================================================== */

const $ = (selector) =>
  document.querySelector(selector);



function setText(
  selector,
  value
) {

  const element =
    $(selector);


  if (element) {

    element.textContent =
      value;

  }

}



/* ==========================================================
   DATE
========================================================== */

const EVENT_DATE =
  new Date(
    WEDDING.startAt
  );



function getArabicDateParts() {

  const weekday =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        weekday:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const fullDate =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        day:
          "numeric",

        month:
          "long",

        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    weekday,
    fullDate,
    time
  };

}



function getEnglishDateParts() {

  const weekday =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        weekday:
          "short",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const day =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        day:
          "2-digit",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const month =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        month:
          "short",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const year =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const hour24 =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        hour:
          "2-digit",

        minute:
          "2-digit",

        hour12:
          false,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    weekday,
    day,
    month,
    year,
    hour24
  };

}



/* ==========================================================
   NAME HELPERS
========================================================== */

function cleanHonorific(
  name
) {

  return name
    .replace(
      /^السيد\s+/u,
      ""
    )
    .trim();

}



function getMonogram() {

  return (
    `${WEDDING.groomInitial} · ${WEDDING.brideInitial}`
  );

}



/* ==========================================================
   REFERENCE NUMBER
========================================================== */

function getReferenceCode() {

  const date =
    getEnglishDateParts();


  const yearShort =
    date.year.slice(-2);


  return (
    `${date.day}${String(
      EVENT_DATE.getMonth() + 1
    ).padStart(2, "0")}${yearShort}`
  );

}



/* ==========================================================
   RENDER
========================================================== */

function renderWeddingData() {

  const arabic =
    getArabicDateParts();


  const english =
    getEnglishDateParts();


  const couple =
    `${WEDDING.groom} × ${WEDDING.bride}`;


  const monogram =
    getMonogram();


  const reference =
    getReferenceCode();



  /* ========================================================
     PAGE
  ======================================================== */

  document.title =
    WEDDING.title;



  /* ========================================================
     OPENING
  ======================================================== */

  setText(
    "#previewMonogram",
    monogram
  );


  setText(
    "#previewNames",
    couple
  );


  setText(
    "#previewDate",
    `${english.day} ${english.month} ${english.year}`
  );


  setText(
    "#mailCode",
    `WED / ${reference}`
  );


  setText(
    "#envelopeMonogram",
    monogram
  );



  /* ========================================================
     HERO
  ======================================================== */

  setText(
    "#heroReference",
    `ISSUE / ${reference}`
  );


  setText(
    "#groomFamily",
    `عائلة ${WEDDING.groomFather}`
  );


  setText(
    "#brideFamily",
    `عائلة ${WEDDING.brideFather}`
  );


  setText(
    "#groomName",
    WEDDING.groom
  );


  setText(
    "#brideName",
    WEDDING.bride
  );


  setText(
    "#heroMessage",
    WEDDING.heroMessage
  );


  setText(
    "#postalDate",
    `${english.weekday} / ${english.day} / ${english.month} / ${english.year}`
  );


  setText(
    "#postalTime",
    english.hour24
  );



  /* ========================================================
     INVITATION
  ======================================================== */

  setText(
    "#invitationText",
    WEDDING.invitationText
  );


  setText(
    "#groomFamilySignature",
    WEDDING.groomFather
  );


  setText(
    "#brideFamilySignature",
    WEDDING.brideFather
  );



  /* ========================================================
     DATE
  ======================================================== */

  setText(
    "#dateDay",
    english.day
  );


  setText(
    "#dateMonth",
    english.month
  );


  setText(
    "#dateYear",
    english.year
  );


  setText(
    "#eventWeekday",
    arabic.weekday
  );


  setText(
    "#eventDate",
    arabic.fullDate
  );


  setText(
    "#eventTime",
    arabic.time
  );



  /* ========================================================
     VENUE
  ======================================================== */

  setText(
    "#venueTitle",
    WEDDING.venue
  );


  setText(
    "#venueCity",
    WEDDING.city
  );



  /* ========================================================
     CLOSING
  ======================================================== */

  setText(
    "#closingMonogram",
    monogram
  );


  setText(
    "#closingNames",
    couple
  );


  setText(
    "#closingDate",
    `${english.day} ${english.month} ${english.year}`
  );


  setText(
    "#footerReference",
    `WED / ${reference}`
  );


  setText(
    "#footerNames",
    `${WEDDING.groomEnglish} × ${WEDDING.brideEnglish}`
  );

}



/* ==========================================================
   OPENING
========================================================== */

const openingScreen =
  $("#openingScreen");


const openInvitationButton =
  $("#openInvitation");


const invitationMain =
  $("#invitationMain");


const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );



function invitationWasOpened() {

  try {

    return (
      sessionStorage.getItem(
        WEDDING.openingStorageKey
      ) === "true"
    );

  } catch {

    return false;

  }

}



function rememberOpening() {

  try {

    sessionStorage.setItem(
      WEDDING.openingStorageKey,
      "true"
    );

  } catch {

    /* sessionStorage unavailable */

  }

}



function completeOpening() {

  openingScreen
    .classList
    .add(
      "is-complete"
    );


  openingScreen
    .setAttribute(
      "aria-hidden",
      "true"
    );


  document.body
    .classList
    .add(
      "invitation-ready"
    );


  document.body.style.overflow =
    "";


  window.setTimeout(
    () => {

      invitationMain.focus({
        preventScroll:
          true
      });

    },
    80
  );

}



function openInvitation() {

  if (
    openingScreen
      .classList
      .contains(
        "is-opening"
      )
  ) {

    return;

  }


  rememberOpening();


  if (
    reduceMotion.matches
  ) {

    completeOpening();

    return;

  }


  /*
    STEP 1
    الظرف يبدأ بالفتح
  */

  openingScreen
    .classList
    .add(
      "is-opening"
    );


  /*
    STEP 2
    نضع الغطاء خلف البطاقة
  */

  window.setTimeout(
    () => {

      openingScreen
        .classList
        .add(
          "flap-behind"
        );

    },
    420
  );


  /*
    STEP 3
    البطاقة تصبح أمام الظرف
  */

  window.setTimeout(
    () => {

      openingScreen
        .classList
        .add(
          "card-front"
        );

    },
    570
  );


  /*
    STEP 4
    البطاقة تستقيم أمام المشاهد
  */

  window.setTimeout(
    () => {

      openingScreen
        .classList
        .add(
          "opening-finish"
        );

    },
    1250
  );


  /*
    STEP 5
    الدخول للدعوة
  */

  window.setTimeout(
    () => {

      completeOpening();

    },
    1950
  );

}



function initializeOpening() {

  if (
    invitationWasOpened()
  ) {

    openingScreen
      .classList
      .add(
        "is-complete"
      );


    openingScreen
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body
      .classList
      .add(
        "invitation-ready"
      );


    return;

  }


  document.body
    .classList
    .remove(
      "invitation-ready"
    );

}



openInvitationButton
  .addEventListener(
    "click",
    openInvitation
  );



/* ==========================================================
   COUNTDOWN
========================================================== */

let countdownTimer =
  null;



function padCountdown(
  value
) {

  return String(
    Math.max(
      0,
      value
    )
  )
    .padStart(
      2,
      "0"
    );

}



function updateCountdown() {

  const difference =
    EVENT_DATE.getTime() -
    Date.now();


  if (
    difference <= 0
  ) {

    setText(
      "#days",
      "00"
    );


    setText(
      "#hours",
      "00"
    );


    setText(
      "#minutes",
      "00"
    );


    setText(
      "#seconds",
      "00"
    );


    setText(
      "#countdownStatus",
      "وصل موعد الرسالة المنتظرة"
    );


    if (
      countdownTimer
    ) {

      clearInterval(
        countdownTimer
      );

    }


    return;

  }


  const second =
    1000;


  const minute =
    second * 60;


  const hour =
    minute * 60;


  const day =
    hour * 24;


  const days =
    Math.floor(
      difference /
      day
    );


  const hours =
    Math.floor(
      (
        difference %
        day
      ) /
      hour
    );


  const minutes =
    Math.floor(
      (
        difference %
        hour
      ) /
      minute
    );


  const seconds =
    Math.floor(
      (
        difference %
        minute
      ) /
      second
    );


  setText(
    "#days",
    padCountdown(
      days
    )
  );


  setText(
    "#hours",
    padCountdown(
      hours
    )
  );


  setText(
    "#minutes",
    padCountdown(
      minutes
    )
  );


  setText(
    "#seconds",
    padCountdown(
      seconds
    )
  );

}



function initializeCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



/* ==========================================================
   GOOGLE MAPS
========================================================== */

function getMapsUrl() {

  if (
    WEDDING.mapsUrl &&
    WEDDING.mapsUrl.trim()
  ) {

    return (
      WEDDING.mapsUrl.trim()
    );

  }


  const query =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      query
    )
  );

}



function initializeMaps() {

  $("#mapsButton").href =
    getMapsUrl();

}



/* ==========================================================
   SHARE URL
========================================================== */

function getShareUrl() {

  if (
    WEDDING.shareUrl &&
    WEDDING.shareUrl.trim()
  ) {

    return (
      WEDDING.shareUrl.trim()
    );

  }


  return window.location.href;

}



/* ==========================================================
   ICS HELPERS
========================================================== */

function pad2(
  value
) {

  return String(
    value
  )
    .padStart(
      2,
      "0"
    );

}



function formatUTCForICS(
  date
) {

  return (
    date.getUTCFullYear() +

    pad2(
      date.getUTCMonth() + 1
    ) +

    pad2(
      date.getUTCDate()
    ) +

    "T" +

    pad2(
      date.getUTCHours()
    ) +

    pad2(
      date.getUTCMinutes()
    ) +

    pad2(
      date.getUTCSeconds()
    ) +

    "Z"
  );

}



function escapeICS(
  value
) {

  return String(
    value
  )
    .replace(
      /\\/g,
      "\\\\"
    )
    .replace(
      /\n/g,
      "\\n"
    )
    .replace(
      /,/g,
      "\\,"
    )
    .replace(
      /;/g,
      "\\;"
    );

}



/* ==========================================================
   CREATE ICS
========================================================== */

function createICS() {

  const start =
    new Date(
      WEDDING.startAt
    );


  const end =
    new Date(
      start.getTime() +
      WEDDING.durationHours *
      60 *
      60 *
      1000
    );


  const now =
    new Date();


  const shareUrl =
    getShareUrl();


  const location =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" - ");


  const description =
    `تتشرف عائلة ${WEDDING.groomFather} وعائلة ${WEDDING.brideFather} بدعوتكم لمشاركة فرحة زفاف ${WEDDING.groom} و${WEDDING.bride}.${shareUrl ? ` رابط الدعوة: ${shareUrl}` : ""}`;


  const uid =
    `wed004-${start.getTime()}@inviteus.party`;


  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//InviteUs//Midnight Post//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${formatUTCForICS(now)}
DTSTART:${formatUTCForICS(start)}
DTEND:${formatUTCForICS(end)}
SUMMARY:${escapeICS(`زفاف ${WEDDING.groom} و${WEDDING.bride}`)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(shareUrl)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

}



/* ==========================================================
   DOWNLOAD ICS
========================================================== */

function downloadICS() {

  const content =
    createICS();


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `wedding-${WEDDING.groom}-${WEDDING.bride}.ics`;


  document.body
    .appendChild(
      link
    );


  link.click();


  link.remove();


  window.setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    500
  );


  showToast(
    "تم إنشاء ملف التقويم"
  );

}



$("#calendarButton")
  .addEventListener(
    "click",
    downloadICS
  );



/* ==========================================================
   SHARE
========================================================== */

function getShareText() {

  const date =
    getArabicDateParts();


  return (
    `تتشرف عائلة ${WEDDING.groomFather} وعائلة ${WEDDING.brideFather} ` +
    `بدعوتكم لمشاركة فرحة زفاف ${WEDDING.groom} و${WEDDING.bride}، ` +
    `وذلك يوم ${date.weekday} ${date.fullDate} ` +
    `في ${WEDDING.venue}.`
  );

}



async function copyToClipboard(
  text
) {

  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {

    await navigator.clipboard
      .writeText(
        text
      );


    return;

  }


  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body
    .appendChild(
      textarea
    );


  textarea.select();


  document.execCommand(
    "copy"
  );


  textarea.remove();

}



async function shareInvitation() {

  const text =
    getShareText();


  const url =
    getShareUrl();


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        {
          title:
            WEDDING.title,

          text:
            text,

          url:
            url
        }
      );


      return;

    } catch (
      error
    ) {

      if (
        error?.name ===
        "AbortError"
      ) {

        return;

      }

    }

  }


  try {

    await copyToClipboard(
      `${text}\n${url}`
    );


    showToast(
      "تم نسخ نص الدعوة والرابط"
    );

  } catch {

    showToast(
      "تعذر نسخ رابط الدعوة"
    );

  }

}



$("#shareButton")
  .addEventListener(
    "click",
    shareInvitation
  );



/* ==========================================================
   TOAST
========================================================== */

let toastTimer =
  null;



function showToast(
  message
) {

  const toast =
    $("#toast");


  toast.textContent =
    message;


  toast
    .classList
    .add(
      "is-visible"
    );


  if (
    toastTimer
  ) {

    clearTimeout(
      toastTimer
    );

  }


  toastTimer =
    window.setTimeout(
      () => {

        toast
          .classList
          .remove(
            "is-visible"
          );

      },
      2600
    );

}



/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initializeReveal() {

  const elements =
    document
      .querySelectorAll(
        ".reveal"
      );


  if (
    reduceMotion.matches ||
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    elements.forEach(
      (element) => {

        element
          .classList
          .add(
            "is-visible"
          );

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "is-visible"
                );


              observer
                .unobserve(
                  entry.target
                );

            }

          }
        );

      },

      {
        threshold:
          0.14,

        rootMargin:
          "0px 0px -40px 0px"
      }

    );


  elements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}



/* ==========================================================
   INITIALIZE
========================================================== */

function initialize() {

  renderWeddingData();

  initializeOpening();

  initializeCountdown();

  initializeMaps();

  initializeReveal();

}



document.addEventListener(
  "DOMContentLoaded",
  initialize
);
