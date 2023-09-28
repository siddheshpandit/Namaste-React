import React from "react";
import ReactDOM from "react-dom/client";
import FoodLogo from "./logo.png";
import Banner from "./banner.png";

const restaurantList = [
  {
    info: {
      id: "2192",
      name: "Aroma's Hyderabad House",
      cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
      locality: "Rahatani Road",
      areaName: "Pimple Saudagar",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "2192",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "71",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=8193956~p=1~eid=0000018a-da9d-451b-4aa1-32b000580133~srvts=1695884854555~45995",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
        exclusiveOfferMessage: "EXTRA 10% OFF",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=2192",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "24444",
      name: "Domino's Pizza",
      cloudinaryImageId: "nilwaj1lhhjvsxewxdh3",
      locality: "Datta Mandir Road",
      areaName: "Wakad",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "24444",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-29 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=24444",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "223630",
      name: "Homely Meals @69",
      cloudinaryImageId: "hdzjkw1ywtzfcnyxz8yq",
      locality: "1st Phase",
      areaName: "Hinjawadi",
      costForTwo: "₹150 for two",
      cuisines: ["Home Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "223630",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "22159",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=223630",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "353836",
      name: "Ghar ka Dabba",
      cloudinaryImageId: "if4lv7eakszmn6kfh0n6",
      locality: "Kasturi Chowk",
      areaName: "Hinjawadi",
      costForTwo: "₹200 for two",
      cuisines: ["Home Food", "Thalis", "North Indian", "Chinese"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "353836",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "22171",
      avgRatingString: "3.9",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=353836",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "175717",
      name: "Radha Pure Veg",
      cloudinaryImageId: "kbupbusbmr3oewcjmzse",
      locality: "Kaspate Wasti",
      areaName: "Wakad",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "175717",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "164182",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=8449894~p=2~eid=0000018a-da9d-451b-4aa1-32b100580231~srvts=1695884854555~45995",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
        exclusiveOfferMessage: "EXTRA 10% OFF",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=175717",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "617612",
      name: "Bowls@69",
      cloudinaryImageId: "qsstdulqxegbbovu4vkl",
      locality: "1st Phase",
      areaName: "Hinjawadi",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Indian", "North Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "617612",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "230394",
      avgRatingString: "3.9",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=617612",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "23728",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "Santosh Nagar",
      areaName: "Dange Chowk",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "23728",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-29 02:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=23728",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "253596",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Tathawade",
      areaName: "Tathawade",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "253596",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4300,
      },
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-29 06:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=253596",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "20223",
      name: "Oven Story Pizza - Standout Toppings",
      cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
      locality: "Choudhary Park",
      areaName: "Wakad",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "20223",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4000,
      },
      parentId: "3534",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=8460502~p=3~eid=0000018a-da9d-451b-4aa1-32b200580333~srvts=1695884854555~45995",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "23-31 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=20223",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "289353",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
      locality: "Kaspate Wasti",
      areaName: "Wakad",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "289353",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "10655",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "12-22 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-29 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=289353",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "156444",
      name: "The Good Bowl",
      cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
      locality: "Choudhary Park",
      areaName: "Wakad",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "156444",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "7918",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=156444",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "9025",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Shankar Kalat Nagar",
      areaName: "Wakad",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "9025",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-29 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
        exclusiveOfferMessage: "EXTRA 10% OFF",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=9025",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "688719",
      name: "Chinese Wok",
      cloudinaryImageId: "ca89a2a34e1222b724031f3988b33bd9",
      locality: "Rahatan",
      areaName: "Pimple Saudagar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "688719",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "61955",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=8433239~p=4~eid=0000018a-da9d-451b-4aa1-32b30058045d~srvts=1695884854555~45995",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=688719",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "23106",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Choudhary Park",
      areaName: "Wakad",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "23106",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "21809",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=23106",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "484416",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "nv5k6sgv7t6f7aj73hxn",
      locality: "Skyline",
      areaName: "Wakad",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "484416",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-29 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=484416",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "89140",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Wakad Road",
      areaName: "Hinjawadi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "89140",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4800,
      },
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=89140",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="left-container">
        <div className="logo-container">
          <img className="logo" src={FoodLogo} alt="My Image" />
        </div>
        <div className="location-container">
          <input
            className="location"
            type="text"
            id="manual-location"
            placeholder="Enter your location"
          />
          <button id="detect-location">Location</button>
        </div>
      </div>
      <div className="right-container">
        <div className="search-container">
          <input
            className="search"
            type="text"
            placeholder="Search for Food and Restaurants"
          />
        </div>
        <div className="nav-items">
          <ul>
            {/* <li>Home</li> */}
            <li>Cart</li>
            <li>Offers</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    const {resData}=props
    const {info}=resData
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          info.cloudinaryImageId
        }
        alt=""
      />
      <div className="res-details">
        <h3>{info.name}</h3>
        <h4>{info.avgRatingString}</h4>
        <h4 style={{color:"grey"}}>{info.cuisines.slice(0, 3).join(", ")}</h4>
        <div
          style={{
            // margin: "4px 0px",
            // padding: "4px 0px",
            color: "grey",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>{info.locality}</h4>
          <h4>30 mins</h4>
        </div>
      </div>
    </div>
  );
};
const AppBody = () => {
  return (
    <div className="app-body">
      <div className="app-banner">
        <img className="banner-image" src={Banner} alt="" />
      </div>
      {/* Restaurant Cards */}
      <div className="res-container">
        <h1 style={{ paddingTop: "10px", }}>
          Restaurants with online food delivery near you
        </h1>
        <div className="res-cards">
          {
            restaurantList.map((restaurant)=>(
                // console.log(restaurant);
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <AppBody />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
