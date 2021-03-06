/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'ada-ambulance': '&#xed31;',
            'ada-baby-face': '&#xed33;',
            'ada-bandage-cross': '&#xed35;',
            'ada-biohazard': '&#xed37;',
            'ada-biology-shape': '&#xed39;',
            'ada-blood-analysis': '&#xed3b;',
            'ada-blood-cell': '&#xed3d;',
            'ada-blood-drop': '&#xed3f;',
            'ada-blood-pressure-control-tool': '&#xed41;',
            'ada-blood-sample': '&#xed43;',
            'ada-blood-transfusion': '&#xed45;',
            'ada-brain-in-bald-male-head': '&#xed47;',
            'ada-broken-bone': '&#xed49;',
            'ada-broken-feet-with-bandage': '&#xed4b;',
            'ada-brush-with-tooth-paste': '&#xed4d;',
            'ada-caduceus-medical-symbol-of-two-ascending-serpents-on-a-cane-with-wings': '&#xed4f;',
            'ada-cells-in-a-circle': '&#xed51;',
            'ada-chemistry-flask-with-liquid': '&#xed53;',
            'ada-crutch': '&#xed55;',
            'ada-crutches-couple': '&#xed57;',
            'ada-dentist-tool': '&#xed59;',
            'ada-dosage-medical-tool': '&#xed5b;',
            'ada-drug-pills': '&#xed5d;',
            'ada-drugs-capsules-and-pills': '&#xed5f;',
            'ada-emergency-light': '&#xed61;',
            'ada-eye-scanner-medical-symbol': '&#xed63;',
            'ada-family-of-heterosexual-couple': '&#xed65;',
            'ada-female-sign': '&#xed67;',
            'ada-first-aid-kit': '&#xed69;',
            'ada-handicap': '&#xed6b;',
            'ada-heart-beats-lifeline-in-a-heart': '&#xed6d;',
            'ada-heart-black-shape': '&#xed6f;',
            'ada-heart-rate-monitor': '&#xed71;',
            'ada-hospital-bed-silhouette-side-view': '&#xed73;',
            'ada-hospital-building-front': '&#xed75;',
            'ada-hospital-letter-sign-in-rounded-square': '&#xed77;',
            'ada-hospital-medical-signal-of-a-cross-in-a-circle': '&#xed79;',
            'ada-hospital-placeholder': '&#xed7b;',
            'ada-human-ear-shape': '&#xed7d;',
            'ada-human-eye-shape': '&#xed7f;',
            'ada-human-feet-shape': '&#xed81;',
            'ada-hurted-finger-with-bandage': '&#xed83;',
            'ada-illness-on-bed': '&#xed85;',
            'ada-lifeline-of-heartbeats-on-a-paper-on-a-clipboard': '&#xed87;',
            'ada-lungs-silhouette': '&#xed89;',
            'ada-male-gender-sign': '&#xed8b;',
            'ada-medical-chain-symbol-of-dna': '&#xed8d;',
            'ada-medical-chopper-transport': '&#xed8f;',
            'ada-medical-circular-glasses': '&#xed91;',
            'ada-medical-doctor-specialist': '&#xed93;',
            'ada-medical-hammer-tool': '&#xed95;',
            'ada-medical-heart-scan': '&#xed97;',
            'ada-medical-notes': '&#xed99;',
            'ada-medical-pill': '&#xed9b;',
            'ada-medical-results-folders': '&#xed9d;',
            'ada-medical-test': '&#xed9f;',
            'ada-medical-talk': '&#xeda1;',
            'ada-medical-temperature-control-tool': '&#xeda3;',
            'ada-medicine-capsules': '&#xeda5;',
            'ada-medicines-bowl': '&#xeda7;',
            'ada-medicine-small-bottle': '&#xeda9;',
            'ada-men-silhouette': '&#xedab;',
            'ada-microscope-tool': '&#xedad;',
            'ada-mother-with-baby': '&#xedaf;',
            'ada-mouth-bald': '&#xedb1;',
            'ada-negative-sign': '&#xedb3;',
            'ada-woman-nurse': '&#xedb5;',
            'ada-nurse-u': '&#xedb7;',
            'ada-scissors': '&#xedb9;',
            'ada-oxygen': '&#xedbb;',
            'ada-person-broken': '&#xedbd;',
            'ada-pharmacy-shopping-cart': '&#xedbf;',
            'ada-pharmacy': '&#xedc1;',
            'ada-pharmacy-tool': '&#xedc3;',
            'ada-poison-bottle': '&#xedc5;',
            'ada-positive-verified': '&#xedc7;',
            'ada-pregnancy': '&#xedc9;',
            'ada-pulse-line': '&#xedcb;',
            'ada-rolled-paper': '&#xedcd;',
            'ada-scale-balanced': '&#xedcf;',
            'ada-scale-tool-control': '&#xedd1;',
            'ada-scalpel': '&#xedd3;',
            'ada-screw': '&#xedd5;',
            'ada-sperm': '&#xedd7;',
            'ada-stethoscope': '&#xedd9;',
            'ada-stomach-shape': '&#xeddb;',
            'ada-cancer-ribbon': '&#xeddd;',
            'ada-syringe': '&#xeddf;',
            'ada-syrup-medicine': '&#xede1;',
            'ada-tag-cross': '&#xede3;',
            'ada-teeth': '&#xede5;',
            'ada-thermometer': '&#xede7;',
            'ada-hexagons': '&#xede9;',
            'ada-toxic': '&#xedeb;',
            'ada-unhealthy': '&#xeded;',
            'ada-heterosexual': '&#xed2f;',
            'ada-glass': '&#xed29;',
            'ada-silhouette': '&#xed2b;',
            'ada-women': '&#xed2d;',
            'ada-x-ray': '&#xed27;',
            'ada-baby-carriage': '&#xec75;',
            'ada-baby-on-stroller': '&#xec77;',
            'ada-baby-playing': '&#xec79;',
            'ada-bboy': '&#xec7b;',
            'ada-boy-in-bath': '&#xec7d;',
            'ada-boy-rised': '&#xec7f;',
            'ada-child-balloon': '&#xec81;',
            'ada-couple': '&#xec83;',
            'ada-couple-in-love': '&#xec85;',
            'ada-couple-brothers': '&#xec87;',
            'ada-couple-man': '&#xec89;',
            'ada-couple-sisters': '&#xec8b;',
            'ada-couple-two-women-house': '&#xec8d;',
            'ada-with': '&#xec8f;',
            'ada-couple-daughter-heart': '&#xec91;',
            'ada-crawling-baby': '&#xec93;',
            'ada-familiar-group': '&#xec96;',
            'ada-group-couple': '&#xec9a;',
            'familiar-group-three': '&#xec9d;',
            'ada-familiar-group-three': '&#xec9f;',
            'ada-familiar-two-child': '&#xeca4;',
            'ada-familiar-two-childs': '&#xeca8;',
            'ada-familiar-love': '&#xecaa;',
            'ada-familiar-meeting': '&#xecac;',
            'ada-family-group-of-a-couple-with-three-children': '&#xecae;',
            'ada-family-group-dog': '&#xecb0;',
            'ada-family-in-home': '&#xecb4;',
            'ada-family-of-three': '&#xecb7;',
            'ada-father-shopping': '&#xecbc;',
            'ada-father-playing': '&#xecbe;',
            'ada-father-playingwith-dog': '&#xecc0;',
            'ada-father-turning': '&#xecc2;',
            'ada-father-with-baby-stroller': '&#xecc4;',
            'ada-father-with-daughter': '&#xecc6;',
            'ada-father-daughter': '&#xecc8;',
            'ada-father-son': '&#xecca;',
            'ada-female-familiar': '&#xeccc;',
            'ada-grandfather': '&#xecce;',
            'ada-grandmother': '&#xecd0;',
            'ada-lesbian-couple': '&#xecd2;',
            'ada-male-familiar': '&#xecd6;',
            'ada-male-family-group': '&#xecd8;',
            'ada-male-family': '&#xecda;',
            'ada-males-couple': '&#xecdc;',
            'ada-marriage-girlfriend': '&#xece0;',
            'ada-man-rising': '&#xece2;',
            'ada-man-silhouette': '&#xece4;',
            'ada-man-shopping': '&#xece6;',
            'ada-man-and-baby': '&#xece8;',
            'ada-men-couple-love': '&#xecea;',
            'ada-men-couple-daughter': '&#xecec;',
            'ada-men-couple': '&#xecee;',
            'ada-men-couple-childs': '&#xecf0;',
            'ada-mother-and-father': '&#xecf2;',
            'ada-mother-and-son': '&#xecf4;',
            'ada-mother-carrying': '&#xecf6;',
            'ada-mother-changing': '&#xecf8;',
            'ada-family-group': '&#xecfa;',
            'ada-mother-food': '&#xecfc;',
            'ada-mother-loving': '&#xecfe;',
            'ada-mother-walking-baby': '&#xed00;',
            'ada-mother-walking': '&#xed02;',
            'ada-mother-son-stroller': '&#xed04;',
            'ada-mother-three-babies': '&#xed06;',
            'ada-mother-arms': '&#xed08;',
            'ada-mother-car': '&#xed0a;',
            'ada-mother-baby': '&#xed0c;',
            'ada-mother-daughter': '&#xed0e;',
            'ada-mother-son': '&#xed10;',
            'ada-pregnant-woman': '&#xed12;',
            'ada-pregnant': '&#xed14;',
            'ada-waiting-lunch': '&#xed16;',
            'ada-three-women': '&#xed18;',
            'ada-men-couple-house': '&#xed1a;',
            'ada-kid-familiar': '&#xed1c;',
            'ada-woman-standing': '&#xed1e;',
            'ada-woman-baby': '&#xec73;',
            'ada-women-couple': '&#xed20;',
            'ada-women-couple-son': '&#xed23;',
            'ada-young-woman': '&#xed25;',
            'ada-boy': '&#xec3a;',
            'ada-casual-male': '&#xec3c;',
            'ada-chef': '&#xec3e;',
            'ada-engineer': '&#xec40;',
            'ada-farmer': '&#xec42;',
            'ada-female-chef': '&#xec57;',
            'ada-female-cooker': '&#xec59;',
            'ada-female-engineer': '&#xec5b;',
            'ada-female-geek': '&#xec5d;',
            'ada-female-graduate': '&#xec5f;',
            'ada-gardener': '&#xec61;',
            'ada-geek-person': '&#xec63;',
            'ada-gentleman': '&#xec44;',
            'ada-girl': '&#xec46;',
            'ada-graduate': '&#xec48;',
            'ada-male': '&#xec4b;',
            'ada-man-with-shirt': '&#xec4d;',
            'ada-medical-doctor': '&#xec65;',
            'ada-medieval-woman': '&#xec67;',
            'ada-person-shirt': '&#xec69;',
            'ada-pilot': '&#xec6b;',
            'ada-policeman': '&#xec6d;',
            'ada-professor': '&#xec6f;',
            'ada-stewardess': '&#xec71;',
            'ada-waiter': '&#xec4f;',
            'ada-waitress': '&#xec51;',
            'ada-woman': '&#xec53;',
            'ada-woman-casual': '&#xec55;',
            'ada-woman-dress': '&#xec4a;',
            'ada-on51-squared': '&#xe907;',
            'ada-on56-squared': '&#xe901;',
            'ada-500px-squared': '&#xe902;',
            'ada-px-squared': '&#xe903;',
            'ada-adsworld-squared': '&#xe904;',
            'ada-adsscuttlepad-squared': '&#xe905;',
            'ada-arte10-squared': '&#xe906;',
            'ada-ashleymadison-squared': '&#xebff;',
            'ada-asmallworld-squared': '&#xe908;',
            'ada-badoo-squared': '&#xe909;',
            'ada-baidu-squared': '&#xe90a;',
            'ada-bananity-squared': '&#xe90b;',
            'ada-bandcamp-squared': '&#xe90c;',
            'ada-bebo-squared': '&#xe90d;',
            'ada-behance-squared': '&#xec01;',
            'ada-bettercodes-squared': '&#xe90f;',
            'ada-bisquits-squared': '&#xe920;',
            'ada-bitacoras-squared': '&#xe925;',
            'ada-bitacorasna-squared': '&#xe927;',
            'ada-blackplanet-squared': '&#xe929;',
            'ada-blogbus-squared': '&#xe92b;',
            'ada-blogger-squared': '&#xec03;',
            'ada-bloson-squared': '&#xe92d;',
            'ada-bola-a-squared': '&#xe92f;',
            'ada-buzznet-squared': '&#xe931;',
            'ada-cafemom-squared': '&#xe933;',
            'ada-care2-squared': '&#xe935;',
            'ada-caringbridge-squared': '&#xe937;',
            'ada-cellufun-squared': '&#xec05;',
            'ada-citeulike-squared': '&#xe939;',
            'ada-classmates-squared': '&#xe93b;',
            'ada-clubdante-squared': '&#xe93d;',
            'ada-coderwall-squared': '&#xe93f;',
            'ada-colourlovers-squared': '&#xe941;',
            'ada-coroflot-squared': '&#xe943;',
            'ada-couchsurfing-squared': '&#xec07;',
            'ada-creattica-squared': '&#xe945;',
            'ada-tv-squared': '&#xe947;',
            'ada-dailymotion-squared': '&#xe949;',
            'ada-deezer-squared': '&#xe94b;',
            'ada-delicious-squared': '&#xe94d;',
            'ada-desarrollo-squared': '&#xe94f;',
            'ada-designrelated-squared': '&#xec09;',
            'ada-deviantart-squared': '&#xe951;',
            'ada-digg-f-squared': '&#xe953;',
            'ada-digg-squared': '&#xe955;',
            'ada-divoblogger-squared': '&#xe957;',
            'ada-doodle-ly-squared': '&#xe959;',
            'ada-douban-squared': '&#xe95b;',
            'ada-dribbble-squared': '&#xec0b;',
            'ada-ebay-squared': '&#xe95d;',
            'ada-etsy-squared': '&#xe95f;',
            'ada-everloop-squared': '&#xe961;',
            'ada-ex-fm-squared': '&#xe963;',
            'ada-eyeem-squared': '&#xe965;',
            'ada-facebook-squared': '&#xe967;',
            'ada-fanlala-squared': '&#xec0d;',
            'ada-flickr-squared': '&#xe969;',
            'ada-flipkart-squared': '&#xe96b;',
            'ada-flixster-squared': '&#xe96d;',
            'ada-fod-squared': '&#xe96f;',
            'ada-fontli-squared': '&#xe971;',
            'ada-fotki-squared': '&#xe973;',
            'ada-fotolog-squared': '&#xec0f;',
            'ada-foursquare-squared': '&#xe975;',
            'ada-friendster-squared': '&#xe977;',
            'ada-funny-or-die-squared': '&#xe979;',
            'ada-gaiaonline-squared': '&#xe97b;',
            'ada-gather-squared': '&#xe97d;',
            'ada-geni-squared': '&#xe97f;',
            'ada-geonick-squared': '&#xec11;',
            'ada-glipho-squared': '&#xe981;',
            'ada-glogster-squared': '&#xe983;',
            'ada-g-plus-squared': '&#xe985;',
            'ada-grooveshark-squared': '&#xe987;',
            'ada-grou-ps-squared': '&#xe989;',
            'ada-habbo-squared': '&#xe98b;',
            'ada-habbo-h-squared': '&#xec13;',
            'ada-heello-squared': '&#xe98d;',
            'ada-hexun-squared': '&#xe98f;',
            'ada-hi5-squared': '&#xe991;',
            'ada-hipstamatic-squared': '&#xe993;',
            'ada-hubbub-squared': '&#xe995;',
            'ada-inside-the-hotel-squared': '&#xe997;',
            'ada-instagram-squared': '&#xec15;',
            'ada-intellectconnect-squared': '&#xe999;',
            'ada-iqyi-squared': '&#xe99b;',
            'ada-itsmy-squared': '&#xe99d;',
            'ada-itsmy-name-squared': '&#xe99f;',
            'ada-jiepang-squared': '&#xe9a1;',
            'ada-jux-squared': '&#xe9a3;',
            'ada-kaixin101-squared': '&#xec17;',
            'ada-kiwibox-squared': '&#xe9a5;',
            'ada-ku6-squared': '&#xe9a7;',
            'ada-last-fm-squared': '&#xe9a9;',
            'ada-linkedin-squared': '&#xe9ab;',
            'ada-literatura-nova-squared': '&#xe9ad;',
            'ada-meetic-squared': '&#xe9af;',
            'ada-meetme-squared': '&#xec19;',
            'ada-meetup-squared': '&#xe9b1;',
            'ada-meetyourfriends-squared': '&#xe9b3;',
            'ada-meneame-squared': '&#xe9b5;',
            'ada-metacafe-squared': '&#xe9b7;',
            'ada-mixi-squared': '&#xe9b9;',
            'ada-mocospace-squared': '&#xe9bb;',
            'ada-myfolio-squared': '&#xec1b;',
            'ada-my-heritage-squared': '&#xe9bd;',
            'ada-my-life-squared': '&#xe9c0;',
            'ada-my-life-name-squared': '&#xe9c2;',
            'ada-my-space-squared': '&#xe9c4;',
            'ada-myspace-squared': '&#xe9c6;',
            'ada-ning-squared': '&#xe9c8;',
            'ada-nk-squared': '&#xec1d;',
            'ada-notasweb-squared': '&#xe9ca;',
            'ada-odnoklassniki-squared': '&#xeb66;',
            'ada-orkut-squared': '&#xeb68;',
            'ada-p1-squared': '&#xeb6a;',
            'ada-panamo-squared': '&#xeb6c;',
            'ada-path-squared': '&#xeb6e;',
            'ada-pengyu-squared': '&#xec1f;',
            'ada-pheed-squared': '&#xeb70;',
            'ada-pictify-squared': '&#xeb72;',
            'ada-pinspire-squared': '&#xeb74;',
            'ada-pinstagram-squared': '&#xeb76;',
            'ada-pinterest-squared': '&#xeb78;',
            'ada-podio-squared': '&#xeb7a;',
            'ada-qq-squared': '&#xec21;',
            'ada-questionity-squared': '&#xeb7c;',
            'ada-qzone-squared': '&#xeb7e;',
            'ada-ravelry-r-squared': '&#xeb80;',
            'ada-ravelry-squared': '&#xeb82;',
            'ada-redalyc-squared': '&#xeb84;',
            'ada-reddit-squared': '&#xeb86;',
            'ada-reddit-name-squared': '&#xec23;',
            'ada-rendezvous-squared': '&#xeb88;',
            'ada-renren-squared': '&#xeb8a;',
            'ada-researchgate-squared': '&#xeb8c;',
            'ada-reverbnation-squared': '&#xeb8e;',
            'ada-ryze-name-squared': '&#xeb90;',
            'ada-ryze-squared': '&#xeb92;',
            'ada-scoopit-squared': '&#xec25;',
            'ada-scoopit-name-squared': '&#xeb94;',
            'ada-scribd-squared': '&#xeb96;',
            'ada-sina-squared': '&#xeb98;',
            'ada-sinaeye-squared': '&#xeb9a;',
            'ada-skyrock-squared': '&#xeb9c;',
            'ada-slideshare-squared': '&#xeb9e;',
            'ada-socialcam-squared': '&#xec27;',
            'ada-sonico-squared': '&#xeba0;',
            'ada-sonico-smile-squared': '&#xeba2;',
            'ada-soundcloud-squared': '&#xeba4;',
            'ada-spotbros-squared': '&#xeba6;',
            'ada-spotify-squared': '&#xeba8;',
            'ada-studivz-squared': '&#xebaa;',
            'ada-stumbleupon-squared': '&#xec29;',
            'ada-symbaloo-squared': '&#xebac;',
            'ada-tadaa-squared': '&#xebae;',
            'ada-tagged-squared': '&#xebb0;',
            'ada-tagworld-squared': '&#xebb2;',
            'ada-taringa-squared': '&#xebb4;',
            'ada-telly-squared': '&#xebb6;',
            'ada-tencent-squared': '&#xec2b;',
            'ada-threadless-squared': '&#xebb8;',
            'ada-tianji-squared': '&#xebba;',
            'ada-travbuddy-squared': '&#xebbc;',
            'ada-tribe-squared': '&#xebbe;',
            'ada-tripadvisor-squared': '&#xebc0;',
            'ada-tudou-squared': '&#xebc2;',
            'ada-tuenti-squared': '&#xec2d;',
            'ada-tumblr-squared': '&#xebc4;',
            'ada-tu-tv-squared': '&#xebc6;',
            'ada-tv-tag-squared': '&#xebc8;',
            'ada-twitpic-squared': '&#xebca;',
            'ada-twitter-t-squared': '&#xebcc;',
            'ada-twitter-squared': '&#xebce;',
            'ada-twoo-squared': '&#xec2f;',
            'ada-typophile-squared': '&#xebd0;',
            'ada-ushi-squared': '&#xebd2;',
            'ada-vampirefreaks-squared': '&#xebd4;',
            'ada-viadeo-squared': '&#xebd6;',
            'ada-viddy-squared': '&#xebd8;',
            'ada-vimeo-squared': '&#xebda;',
            'ada-squared': '&#xec31;',
            'ada-vine-v-squared': '&#xebdc;',
            'ada-vk-squared': '&#xebde;',
            'ada-wayn-squared': '&#xebe0;',
            'ada-weeworld-squared': '&#xebe2;',
            'ada-weheartit-squared': '&#xebe4;',
            'ada-weibo-squared': '&#xebe6;',
            'ada-widbook-squared': '&#xec33;',
            'ada-wikiloc-squared': '&#xebe8;',
            'ada-wikipedia-w-squared': '&#xebea;',
            'ada-wikipedia-squared': '&#xebec;',
            'ada-wordpress-squared': '&#xebee;',
            'ada-xanga-squared': '&#xebf0;',
            'ada-xanga-pusle-squared': '&#xebf2;',
            'ada-xiami-squared': '&#xec35;',
            'ada-xing-squared': '&#xebf4;',
            'ada-yelp-squared': '&#xebf6;',
            'ada-youku-squared': '&#xebf8;',
            'ada-yoursphere-squared': '&#xebfa;',
            'ada-youtube-squared': '&#xebfc;',
            'ada-youtube-icon-squared': '&#xebfe;',
            'ada-yupoo-squared': '&#xec37;',
            'ada-zorpia-squared': '&#xe9cc;',
            'ada-on-51-rounded': '&#xe9cd;',
            'ada-56-rounded': '&#xe9ce;',
            'ada-px-rounded': '&#xe9cf;',
            'ada-500px-rounded': '&#xe9d0;',
            'ada-adsofworld-rounded': '&#xe9d1;',
            'ada-ads-rounded': '&#xe9d2;',
            'ada-arte10-rounded': '&#xe9d3;',
            'ada-ashley-madison-rounded': '&#xe9d4;',
            'ada-asmallworld-rounded': '&#xe9d5;',
            'ada-badoo-rounded': '&#xe9d6;',
            'ada-baidu-rounded': '&#xe9d7;',
            'ada-bananity-rounded': '&#xe9d8;',
            'ada-bandcamp-rounded': '&#xe9d9;',
            'ada-bebo-rounded': '&#xe9da;',
            'ada-behance-rounded': '&#xe9db;',
            'ada-bettercodes-rounded': '&#xe9dc;',
            'ada-bisquits-rounded': '&#xe9dd;',
            'ada-bitacoras-b-rounded': '&#xe9de;',
            'ada-bitacoras-rounded': '&#xe9df;',
            'ada-blackplanet-rounded': '&#xe9e0;',
            'ada-blogbus-rounded': '&#xe9e1;',
            'ada-blogger-rounded': '&#xe9e2;',
            'ada-bloson-rounded': '&#xe9e3;',
            'ada-bola-a-rounded': '&#xe9e4;',
            'ada-buzznet-rounded': '&#xe9e5;',
            'ada-cafemom-rounded': '&#xe9e6;',
            'ada-care2-rounded': '&#xe9e7;',
            'ada-caringbridge-rounded': '&#xe9e8;',
            'ada-cellufun-rounded': '&#xe9e9;',
            'ada-citeulike-rounded': '&#xe9ea;',
            'ada-classmates-rounded': '&#xe9eb;',
            'ada-club-dante-rounded': '&#xe9ec;',
            'ada-coderwall-rounded': '&#xe9ed;',
            'ada-colourlovers-rounded': '&#xe9ee;',
            'ada-coroflot-rounded': '&#xe9ef;',
            'ada-couchsurfing-rounded': '&#xe9f0;',
            'ada-creattica-rounded': '&#xe9f1;',
            'ada-cross-tv-rounded': '&#xe9f2;',
            'ada-dailymotion-rounded': '&#xe9f3;',
            'ada-deezer-rounded': '&#xe9f4;',
            'ada-delicious-rounded': '&#xe9f5;',
            'ada-desarrollo-rounded': '&#xe9f6;',
            'ada-designrelated-rounded': '&#xe9f7;',
            'ada-deviantart-rounded': '&#xe9f8;',
            'ada-digg-d-rounded': '&#xe9f9;',
            'ada-digg-rounded': '&#xe9fa;',
            'ada-divoblogger-rounded': '&#xe9fb;',
            'ada-doodle-ly-rounded': '&#xe9fc;',
            'ada-douban-rounded': '&#xe9fd;',
            'ada-dribbble-rounded': '&#xe9fe;',
            'ada-etsy-rounded': '&#xe9ff;',
            'ada-everloop-rounded': '&#xea00;',
            'ada-ex-fm-rounded': '&#xea01;',
            'ada-eyeem-rounded': '&#xea02;',
            'ada-facebook-rounded': '&#xea03;',
            'ada-fanlala-rounded': '&#xea04;',
            'ada-flickr-rounded': '&#xea05;',
            'ada-flipkar-rounded': '&#xea06;',
            'ada-flixster-rounded': '&#xea07;',
            'ada-fod-rounded': '&#xea08;',
            'ada-fontli-rounded': '&#xea09;',
            'ada-fotki-rounded': '&#xea0a;',
            'ada-fotolog-rounded': '&#xea0b;',
            'ada-foursquare-rounded': '&#xea0c;',
            'ada-friendster-rounded': '&#xea0d;',
            'ada-funny-or-die-rounded': '&#xea0e;',
            'ada-gaiaonline-rounded': '&#xea0f;',
            'ada-gather-rounded': '&#xea10;',
            'ada-geni-social-rounded': '&#xea11;',
            'ada-geonick-rounded': '&#xea12;',
            'ada-glipho-rounded': '&#xea13;',
            'ada-glogster-rounded': '&#xea14;',
            'ada-g-plus-rounded': '&#xea15;',
            'ada-grooveshark-rounded': '&#xea16;',
            'ada-grou-ps-rounded': '&#xea17;',
            'ada-habbo-h-rounded': '&#xea18;',
            'ada-habbo-rounded': '&#xea19;',
            'ada-heello-rounded': '&#xea1a;',
            'ada-hexun-rounded': '&#xea1b;',
            'ada-hi5-rounded': '&#xea1c;',
            'ada-hipstamatic-roundedv': '&#xea1d;',
            'ada-hubbub-rounded': '&#xea1e;',
            'ada-inside-the-hotel-rounded': '&#xea1f;',
            'ada-instagra-rounded': '&#xea20;',
            'ada-intellectconnect-rounded': '&#xea21;',
            'ada-iqyi-rounded': '&#xea22;',
            'ada-itsmy-name-rounded': '&#xea23;',
            'ada-itsmy-rounded': '&#xea24;',
            'ada-jiepang-rounded': '&#xea25;',
            'ada-jux-rounded': '&#xea26;',
            'ada-kaixin101-rounded': '&#xea27;',
            'ada-kiwibox-rounded': '&#xea28;',
            'ada-ku6-rounded': '&#xea29;',
            'ada-last-fm-rounded': '&#xea2a;',
            'ada-linkedin-rounded': '&#xea2b;',
            'ada-literatura-nova-rounded': '&#xea2c;',
            'ada-meetic-rounded': '&#xea2d;',
            'ada-meetme-rounded': '&#xea2e;',
            'ada-meetup-rounded': '&#xea2f;',
            'ada-meetyourfriends-rounded': '&#xea30;',
            'ada-meneame-rounded': '&#xea31;',
            'ada-metacafe-rounded': '&#xea32;',
            'ada-mixi-rounded': '&#xea33;',
            'ada-mocospace-rounded': '&#xea34;',
            'ada-myfolio-rounded': '&#xea35;',
            'ada-my-heritage-rounded': '&#xea36;',
            'ada-my-life-rounded': '&#xea37;',
            'ada-my-life-social-logo1': '&#xea38;',
            'ada-my-space-rounded': '&#xea39;',
            'ada-myspace-rounded': '&#xea3a;',
            'ada-ning-rounded': '&#xea3b;',
            'ada-nk-rounded': '&#xea3c;',
            'ada-notasweb-rounded': '&#xea3d;',
            'ada-odnoklassniki-rounded': '&#xea3e;',
            'ada-orkut-rounded': '&#xea3f;',
            'ada-p1-rounded': '&#xea40;',
            'ada-panamo-rounded': '&#xea41;',
            'ada-path-rounded': '&#xea42;',
            'ada-pengyu-rounded': '&#xea43;',
            'ada-pheed-rounded': '&#xea44;',
            'ada-pictify-rounded': '&#xea45;',
            'ada-pinspire-rounded': '&#xea46;',
            'ada-pinstagram-rounded': '&#xea47;',
            'ada-pinterest-rounded': '&#xea48;',
            'ada-podio-rounded': '&#xea49;',
            'ada-qq-rounded': '&#xea4a;',
            'ada-questionity-rounded': '&#xea4b;',
            'ada-qzone-rounded': '&#xea4c;',
            'ada-ravelry-rounded': '&#xea4d;',
            'ada-ravelry-r-rounded': '&#xea4e;',
            'ada-redalyc-rounded': '&#xea4f;',
            'ada-reddit-rounded': '&#xea50;',
            'ada-reddit-r-rounded': '&#xea51;',
            'ada-rendezvous-rounded': '&#xea52;',
            'ada-renren-rounded': '&#xea53;',
            'ada-researchgate-rounded': '&#xea54;',
            'ada-reverbnation-rounded': '&#xea55;',
            'ada-ryze-rounded': '&#xea56;',
            'ada-ryze-social-logo1': '&#xea57;',
            'ada-scoop-rounded': '&#xea58;',
            'ada-scoop-it-rounded': '&#xea59;',
            'ada-scribd-rounded': '&#xea5a;',
            'ada-sina-rounded': '&#xea5b;',
            'ada-sina-s-rounded': '&#xea5c;',
            'ada-skyrock-rounded': '&#xea5d;',
            'ada-slideshare-rounded': '&#xea5e;',
            'ada-socialcam-rounded': '&#xea5f;',
            'ada-sonico-rounded': '&#xea60;',
            'ada-sonico-smile-rounded': '&#xea61;',
            'ada-soundcloud-rounded': '&#xea62;',
            'ada-spotbros-rounded': '&#xea63;',
            'ada-spotify-rounded': '&#xea64;',
            'ada-studivz-rounded': '&#xea65;',
            'ada-stumbleupon-rounded': '&#xea66;',
            'ada-symbaloo-rounded': '&#xea67;',
            'ada-tadaa-rounded': '&#xea68;',
            'ada-tagged-rounded': '&#xea69;',
            'ada-tagworld-rounded': '&#xea6a;',
            'ada-taringa-rounded': '&#xea6b;',
            'ada-telly-rounded': '&#xea6c;',
            'ada-tencent-rounded': '&#xea6d;',
            'ada-threadless-rounded': '&#xea6e;',
            'ada-tianji-rounded': '&#xea6f;',
            'ada-travbuddy-rounded': '&#xea70;',
            'ada-tribe-rounded': '&#xea71;',
            'ada-tripadvisor-rounded': '&#xea72;',
            'ada-tudou-rounded': '&#xea73;',
            'ada-tuenti-rounded': '&#xea74;',
            'ada-tumblr-rounded': '&#xea75;',
            'ada-tu-tv-rounded': '&#xea76;',
            'ada-tv-tag-rounded': '&#xea77;',
            'ada-twitpic-rounded': '&#xea78;',
            'ada-twitter-t-rounded': '&#xea79;',
            'ada-twitter-rounded': '&#xea7a;',
            'ada-twoo-rounded': '&#xea7b;',
            'ada-typophile-rounded': '&#xea7c;',
            'ada-ushi-rounded': '&#xea7d;',
            'ada-vampirefreaks-rounded': '&#xea7e;',
            'ada-viadeo-rounded': '&#xea7f;',
            'ada-viddy-rounded': '&#xea80;',
            'ada-vimeo-rounded': '&#xea81;',
            'ada-vine-rounded': '&#xea82;',
            'ada-vine-v-rounded': '&#xea83;',
            'ada-vk-rounded': '&#xea84;',
            'ada-wayn-rounded': '&#xea85;',
            'ada-weeworld-rounded': '&#xea86;',
            'ada-weheartit-rounded': '&#xea87;',
            'ada-weibo-rounded': '&#xea88;',
            'ada-widbook-rounded': '&#xea89;',
            'ada-wikiloc-rounded': '&#xea8a;',
            'ada-wikipedia-w-rounded': '&#xea8b;',
            'ada-wikipedia-rounded': '&#xea8c;',
            'ada-wordpress-rounded': '&#xea8d;',
            'ada-xanga-x-rounded': '&#xea8e;',
            'ada-xanga-rounded': '&#xea8f;',
            'ada-xiami-rounded': '&#xea90;',
            'ada-xing-rounded': '&#xea91;',
            'ada-yelp-rounded': '&#xea92;',
            'ada-youku-rounded': '&#xea93;',
            'ada-yoursphere-rounded': '&#xea94;',
            'ada-youtube-name-rounded': '&#xea95;',
            'ada-youtube-rounded': '&#xea96;',
            'ada-yupoo-rounded': '&#xea97;',
            'ada-zorpia-rounded': '&#xea98;',
            'ada-51on': '&#xea99;',
            'ada-56': '&#xea9a;',
            'ada-px': '&#xea9b;',
            'ada-500px': '&#xea9c;',
            'ada-ads-of-the-world': '&#xea9d;',
            'ada-ads': '&#xea9e;',
            'ada-arte10': '&#xea9f;',
            'ada-ashley-madison': '&#xeaa0;',
            'ada-asmallworld': '&#xeaa1;',
            'ada-badoo': '&#xeaa2;',
            'ada-baidu': '&#xeaa3;',
            'ada-bananity': '&#xeaa4;',
            'ada-bandcamp': '&#xeaa5;',
            'ada-bebo': '&#xeaa6;',
            'ada-behance': '&#xeaa7;',
            'ada-bettercodes': '&#xeaa8;',
            'ada-bisquits': '&#xeaa9;',
            'ada-bitacoras': '&#xeaaa;',
            'ada-bitacoras-b': '&#xeaab;',
            'ada-blackplanet': '&#xeaac;',
            'ada-blogbus': '&#xeaad;',
            'ada-blogger': '&#xeaae;',
            'ada-bloson': '&#xeaaf;',
            'ada-bola-a': '&#xeab0;',
            'ada-buzznet': '&#xeab1;',
            'ada-cafemom': '&#xeab2;',
            'ada-care2': '&#xeab3;',
            'ada-caringbridge': '&#xeab4;',
            'ada-cellufun': '&#xeab5;',
            'ada-citeulike': '&#xeab6;',
            'ada-classmates': '&#xeab7;',
            'ada-club-dante': '&#xeab8;',
            'ada-coderwall': '&#xeab9;',
            'ada-colourlovers': '&#xeaba;',
            'ada-coroflot': '&#xeabb;',
            'ada-couchsurfing': '&#xeabc;',
            'ada-creattica': '&#xeabd;',
            'ada-cross-tv': '&#xeabe;',
            'ada-dailymotion': '&#xeabf;',
            'ada-deezer': '&#xeac0;',
            'ada-delicious': '&#xeac1;',
            'ada-desarrollo': '&#xeac2;',
            'ada-designrelated': '&#xeac3;',
            'ada-deviantart': '&#xeac4;',
            'ada-digg': '&#xeac5;',
            'ada-digg-name': '&#xeac6;',
            'ada-divoblogger': '&#xeac7;',
            'ada-doodle-ly': '&#xeac8;',
            'ada-douban': '&#xeac9;',
            'ada-dribbble': '&#xeaca;',
            'ada-ebay': '&#xeacb;',
            'ada-etsy': '&#xeacc;',
            'ada-everloop': '&#xeacd;',
            'ada-ex-fm': '&#xeace;',
            'ada-eyeem': '&#xeacf;',
            'ada-facebook': '&#xead0;',
            'ada-fanlala': '&#xead1;',
            'ada-flickr': '&#xead2;',
            'ada-flipkart': '&#xead3;',
            'ada-flixster': '&#xead4;',
            'ada-fod-social': '&#xead5;',
            'ada-fontli': '&#xead6;',
            'ada-fotki': '&#xead7;',
            'ada-fotolog': '&#xead8;',
            'ada-foursquare': '&#xead9;',
            'ada-friendster': '&#xeada;',
            'ada-funny-or-die': '&#xeadb;',
            'ada-gaiaonline': '&#xeadc;',
            'ada-gather': '&#xeadd;',
            'ada-geni-social': '&#xeade;',
            'ada-geonick': '&#xeadf;',
            'ada-glipho': '&#xeae0;',
            'ada-glogster': '&#xeae1;',
            'ada-g-plus': '&#xeae2;',
            'ada-grooveshark': '&#xeae3;',
            'ada-grou-ps': '&#xeae4;',
            'ada-habbo': '&#xeae5;',
            'ada-habbo-h': '&#xeae6;',
            'ada-heello': '&#xeae7;',
            'ada-hexun': '&#xeae8;',
            'ada-hi5': '&#xeae9;',
            'ada-hipstamatic': '&#xeaea;',
            'ada-hubbub': '&#xeaeb;',
            'ada-inside-the-hotel': '&#xeaec;',
            'ada-instagram': '&#xeaed;',
            'ada-intellectconnect': '&#xeaee;',
            'ada-iqyi': '&#xeaef;',
            'ada-itsmy': '&#xeaf0;',
            'ada-itsmy-name': '&#xeaf1;',
            'ada-jiepang': '&#xeaf2;',
            'ada-jux': '&#xeaf3;',
            'ada-kaixin101': '&#xeaf4;',
            'ada-kiwibox': '&#xeaf5;',
            'ada-ku6': '&#xeaf6;',
            'ada-last-fm': '&#xeaf7;',
            'ada-linkedin': '&#xeaf8;',
            'ada-literatura-nova': '&#xeaf9;',
            'ada-meetic': '&#xeafa;',
            'ada-meetme': '&#xeafb;',
            'ada-meetup': '&#xeafc;',
            'ada-meetyourfriends': '&#xeafd;',
            'ada-meneame': '&#xeafe;',
            'ada-metacafe': '&#xeaff;',
            'ada-mixi': '&#xeb00;',
            'ada-mocospace': '&#xeb01;',
            'ada-myfolio': '&#xeb02;',
            'ada-my-heritage': '&#xeb03;',
            'ada-my-life': '&#xeb04;',
            'ada-my-life-m': '&#xeb05;',
            'ada-my-space': '&#xeb06;',
            'ada-myspace-name': '&#xeb07;',
            'ada-ning': '&#xeb08;',
            'ada-nk': '&#xeb09;',
            'ada-notasweb': '&#xeb0a;',
            'ada-odnoklassniki': '&#xeb0b;',
            'ada-orkut': '&#xeb0c;',
            'ada-p1': '&#xeb0d;',
            'ada-panamo': '&#xeb0e;',
            'ada-path': '&#xeb0f;',
            'ada-pengyu': '&#xeb10;',
            'ada-pheed': '&#xeb11;',
            'ada-pictify': '&#xeb12;',
            'ada-pinspire': '&#xeb13;',
            'ada-pinstagram': '&#xeb14;',
            'ada-pinterest': '&#xeb15;',
            'ada-podio': '&#xeb16;',
            'ada-qq': '&#xeb17;',
            'ada-questionity': '&#xeb18;',
            'ada-qzone': '&#xeb19;',
            'ada-ravelry': '&#xeb1a;',
            'ada-ravelry-r': '&#xeb1b;',
            'ada-redalyc': '&#xeb1c;',
            'ada-reddit-r': '&#xeb1d;',
            'ada-reddit': '&#xeb1e;',
            'ada-rendezvous': '&#xeb1f;',
            'ada-renrenrenren': '&#xeb20;',
            'ada-researchgate': '&#xeb21;',
            'ada-reverbnation': '&#xeb22;',
            'ada-ryze': '&#xeb23;',
            'ada-ryze-r': '&#xeb24;',
            'ada-scoop-it-s': '&#xeb25;',
            'ada-scoop-it': '&#xeb26;',
            'ada-scribd': '&#xeb27;',
            'ada-sina-name': '&#xeb28;',
            'ada-sina': '&#xeb29;',
            'ada-skyrock': '&#xeb2a;',
            'ada-slideshare': '&#xeb2b;',
            'ada-socialcam': '&#xeb2c;',
            'ada-sonico': '&#xeb2d;',
            'ada-sonico-smail': '&#xeb2e;',
            'ada-soundcloud': '&#xeb2f;',
            'ada-spotbros': '&#xeb30;',
            'ada-spotify': '&#xeb31;',
            'ada-studivz': '&#xeb32;',
            'ada-stumbleupon': '&#xeb33;',
            'ada-symbaloo': '&#xeb34;',
            'ada-tadaa': '&#xeb35;',
            'ada-tagged': '&#xeb36;',
            'ada-tagworld': '&#xeb37;',
            'ada-taringa': '&#xeb38;',
            'ada-telly': '&#xeb39;',
            'ada-tencent': '&#xeb3a;',
            'ada-threadless': '&#xeb3b;',
            'ada-tianji': '&#xeb3c;',
            'ada-travbuddy': '&#xeb3d;',
            'ada-tribe': '&#xeb3e;',
            'ada-tripadvisor': '&#xeb3f;',
            'ada-tudou': '&#xeb40;',
            'ada-tuenti': '&#xeb41;',
            'ada-tumblr': '&#xeb42;',
            'ada-tu-tv': '&#xeb43;',
            'ada-tv-tag': '&#xeb44;',
            'ada-twitpic': '&#xeb45;',
            'ada-twitter-t': '&#xeb46;',
            'ada-twitter': '&#xeb47;',
            'ada-twoo': '&#xeb48;',
            'ada-typophile': '&#xeb49;',
            'ada-ushi': '&#xeb4a;',
            'ada-vampirefreaks': '&#xeb4b;',
            'ada-viadeo': '&#xeb4c;',
            'ada-viddy': '&#xeb4d;',
            'ada-vimeo': '&#xeb4e;',
            'ada-vine': '&#xeb4f;',
            'vine-v': '&#xeb50;',
            'vk': '&#xeb51;',
            'ada-wayn': '&#xeb52;',
            'ada-weeworld': '&#xeb53;',
            'ada-weheartit': '&#xeb54;',
            'ada-weibo': '&#xeb55;',
            'ada-widbook': '&#xeb56;',
            'ada-wikiloc': '&#xeb57;',
            'ada-wikipedia-w': '&#xeb58;',
            'ada-wikipediawikipedia': '&#xeb59;',
            'ada-wordpress': '&#xeb5a;',
            'ada-xanga-name': '&#xeb5b;',
            'ada-xanga': '&#xeb5c;',
            'ada-xiami': '&#xeb5d;',
            'ada-xing': '&#xeb5e;',
            'ada-yelp': '&#xeb5f;',
            'ada-youku': '&#xeb60;',
            'ada-yoursphere': '&#xeb61;',
            'ada-youtube-name': '&#xeb62;',
            'ada-youtube': '&#xeb63;',
            'ada-yupoo': '&#xeb64;',
            'ada-zorpia': '&#xeb65;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
