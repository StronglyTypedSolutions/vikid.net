import { Let } from "@vikid-mod/language";
import { Language } from "locale";
import { groups } from "./groups";
import { methods } from "./methods";
import { puzzles } from "./puzzles";
import { sensors } from "./sensors";
import { primitives, values } from "./values";
import type { FeatureKey, Features, Translations } from "../types";
import config from "@vikid-core/config";

const puzzle_error_in_prog = `🐞 Fout in puzzel programma:\n\n`;
const puzzle_error_in_let = (currentLetLabel: string): string => `🐞 Fout in puzzel formule '${currentLetLabel}:\n\n`;

export const nl: Translations = {
  language: "nl" as Language,

  features: {
    upload: "Assets uploaden naar de ViKiD cloud",
    rewind: "Time-travel debugging",
    templatize: "Programma sjablonen maken",
    generic: "Deze functie",
    video: "Videos exporteren",
    image: "Afbeeldingen exporteren",
    html: "HTML exporteren",
    share: "Delen als puzzel",
    instances: "Aangepaste instanties inspecteren"
  } as Features,

  methods,
  values,
  primitives,
  sensors,
  groups,
  puzzles,

  adjustableParameter: (name: string, index: number) => `<${name || "parameter"}@${index}>`,

  recent: "recent",
  more: "meer...",
  parameter: "parameter",
  type: "type",
  functions: "functies",
  types: "types",
  concepts: "concepten",
  fundamentals: "fundamenten",
  pure_functions: "pure functies",
  actual_functions: "actuele functies",
  points_and_vectors: "punten & vectoren",
  angles: "hoeken",

  toggle_type_filter: "klik om invoer type filter aan/uit te zetten",

  visitor: "bezoeker",

  loading: "laden...",
  failed: "😢 laden mislukt",
  delete: "Verwijderen",
  undelete: "Terug toevoegen",
  templatize: "Verplaats naar sjablonen",

  common_next: "Volgende",
  common_previous: "Vorige",
  common_disagree: "Nee, bedankt",
  common_cancel: "Annuleer",
  common_save: "Bewaren",
  common_agree: "Ja, graag",
  common_ok: "Oké",

  common_delete: "Verwijderen",

  common_success_title: "Gelukt!",
  common_error_title: "Error!",

  generic_error: `😢 Oops!\n\n🐞 Er liep iets mis\n\n↻ Probeer het nog eens.`,

  generic_api_error: "😢 Oops!\n\n🐞 De ViKiD backend gaf een fout terug.\n\n↻ Probeer het nog eens.",
  reload_api_error: "😢 Oops!\n\n🐞 De ViKiD backend gaf een fout terug.\n\n↻ Herlaad de web-pagina.",
  uncaught_fatal_error: "😢 Oops!\n\n🐞 Er ging iets onverwachts mis!\n\n↻ Herlaad de web-pagina en probeer het nog eens.",
  uncaught_fatal_edit_error: "😢 Oops!\n\n🐞 Er ging iets onverwachts mis! ↻ Herlaad de web-pagina en probeer het nog eens.\n\n⛑️ Als er een crash bestand gedownload is, kan je dit ⮹ importeren en verder werken.",

  puzzle_load_error: (id: string) => `😢 Oops!\n\n🐞 Puzzel '${id} kon niet geladen worden.\n\n↻ Herlaad de web-pagina en probeer het nog eens.`,
  puzzle_preview_error: `🧩 Omzetten naar puzzel is mislukt.`,

  account_not_found_title: "Account niet gevonden!",
  account_not_found: "❓ Oops, ViKiD kent je nog niet.\n\n🚹 Wil je een nieuwe account maken?",
  account_conflict_email: "😢 Oops, er lijkt al een account te bestaan met dit e-mail adres.\n\n✏️ ViKiD gaat proberen hiermee in te loggen.",
  account_conflict_user_name: "😢 Oops, er lijkt al een account te bestaan met deze bijnaam.\n\n✏️ Probeer een andere bijnaam te verzinnen!.",
  account_conflict_user_name_short: "Deze bijnaam is al in gebruik.",
  account_conflict_license_key: "😢 Oops, een andere account gebruikt deze licentie sleutel al!",

  no_clipboard_read: `😢 Je browser ondersteunt geen klembord.\n✏️ Plak je tekst hieronder aub.`,
  script_load_error: (progId: string) => `😢 Oops!\n\nProgramma '${progId}' kon niet geladen worden!`,
  script_save_error: (progId: string) => `😢 Oops!\n\nProgramma '${progId}' kon niet opgeslagen worden!`,
  thumb_save_error: (progId: string) => `😢 Oops!\n\nMiniatuur van '${progId}' kon niet opgeslagen worden!`,
  script_clipboard_error: (progId: string) => `😢 Oops!\n\nProgramma '${progId}' kon niet in het clipboard gezet worden!`,
  script_delete_error: (progId: string) => `😢 Oops!\n\nProgramma '${progId}' kon niet verwijderd worden!`,
  script_restore_error: (progId: string) => `😢 Oops!\n\nProgramma '${progId}' kon niet terug toegevoegd worden!`,
  confirm_delete_program: (title: string, type: "program" | "template") => `❓ Ben je zeker dat je ${type === "program" ? "programma" : "sjabloon"} '${title}' wil verwijderen?\n\n⚠️ Na een paar dagen kan je dit niet meer ongedaan maken!`,
  agree_delete: "Ja, verwijder het",

  module_import_error: (progId: string) => `😢 Oops!\n\nProgramma '${progId}' kon niet geimporteerd worden als een module!`,
  module_has_main_refs: (progId: string, paths: string) => `⚠️ Programma '${progId}' kon niet geimporteerd worden als een module,\n🔗 omdat het root verwijzingen heeft naar het hoofd sub-programma ⌂.\n\n⛔ Dit is nog niet ondersteund.\n\n🔗 De volgende verwijzingen moeten worden gebroken:\n${paths}`,

  templatization_error: (progId: string) => `😢 Oops!\n\nProgramma '${progId}' kon niet omgezet worden naar een sjabloon!`,
  request_template_tags: `\n🔩 Geef minstens één tag aan je sjabloon.\n\n🛈 Gebruik een spatie tussen de tags.\n\n⬡ Met de 'module' tag kan je importeren in de playground.\n`,
  edit_template_tags: `🔩 Pas de tags van je sjabloon aan.`,
  edit_template_title: `Open sjabloon.`,
  edit_template_question: `❓ Wat wil je met het programma van dit sjabloon doen?`,
  edit_template_duplicate: `⎘ Dupliceren`,
  edit_template_modify: `✎ Aanpassen`,

  script_moved_to_trashcan: <p><span>Verplaatst naar</span><br /><br /><b>Prullenmand</b></p>,
  script_moved_to_templates: <p><span>Verplaatst naar</span><br /><br /><b>Sjablonen</b></p>,
  script_moved_to_programs: <p><span>Verplaatst naar</span><br /><br /><b>Programma's</b></p>,

  upload_into_cloud: "☁ Upload beeld en geluid in de ViKiD cloud",
  upload_content_generic_error: `😢 Oops!\n\nHet bestand kon niet geüpload worden.`,
  upload_content_too_large: (mb: number) => `😢 Oops!\n\nHet bestand is te groot om te uploaden!\n\nDe maximum grootte is ${mb} megabyte.`,
  feature_premium_members_only: (feature: FeatureKey) => `🛈 ${nl.features[feature]} vereist een premium lidmaatschap.\n\n🛒 Wil je onze e-shop bezoeken voor meer informatie?`,
  premium_members_only_title: `🥇 Enkel voor premium leden`,
  waiting_premium_member_sale: <div><h1>🥇 Even geduld, we verwerken je premium lidmaatschap...</h1><br /><h2>⏳ Dit kan enkele minuten duren.</h2><br /><em>🛈 Je kan ook de licentiesleutel uit de orderbevestiging email plakken in je account page.</em></div>,
  premium_member_sale_successful: <p><h1>🥇 Je nu een Premium ViKiD lid!</h1><br /><br /><span>😍 Hartelijk dank van het ViKiD team, je bent geweldig!</span></p>,
  premium_member_sale_header: "Premium lidmaatschap",

  shop_coming_soon: <h1>Binnenkort beschikbaar!</h1>,
  shop_redirect: "We verwijzen je door naar de winkelpagina...",

  cookies_ViKiD_keeps: "ViKiD bewaart",
  cookies_on_this_pc: "op deze computer.",
  cookies_thanks_to_cookies: "Dankzij cookies kan je ingelogd blijven, onthouden we jouw vooruitgang in het spel, personalizeren en verbeteren we ViKiD. Cookies om in te loggen zijn noodzakelijk.",
  cookies_we_value_privacy: "Wij respecteren jouw privacy en beschermen jouw gegevens.",
  cookies_explain_link: "https://wikikids.nl/Cookie_(internet)",

  consent_agree_all_cookies: "Alle noodzakelijke en optionele cookies aanvaarden",
  consent_agree_selected_cookies: "Alle noodzakelijke en geselecteerde cookies aanvaarden",
  consent_agree_telemetry_cookies: "Aanvaard analytische cookies?",

  gdpr_not_yet_automated: `⚠️ Dit is nog niet geautomatiseerd.`,
  gdpr_send_email: (username: string) => `📧 Gelieve een e-mail te sturen naar gdpr@vikid.net,\nmet vermelding van je gebruikersnaam '${username}'.`,

  login_header: "Meld je aan",
  login_header_password: "Paswoord?",
  login_email: "jouw e-mailadres",
  login_password: "paswoord",
  login_denied_title: "Login geweigerd!",
  login_denied: "🤔 Toegang geweigerd.\n\n🔑 Wil je je paswoord opnieuw instellen?",
  login_email_invalid: "😕 Ongeldig email adres.",
  login_password_required: "😕 Je paswoord is vereist om in te loggen.",
  login_link_register_instead: "Nieuwe gebruiker?",
  login_link_forgot_password: "Paswoord vergeten?",
  login_header_forgot_password: "Paswoord vergeten",
  login_header_reset_password: "Paswoord instellen",
  login_password_reset_email: "📧 Je zal een e-mail ontvangen waarmee je een nieuw paswoord kan kiezen.\n\n🕵 Controleer ook zeker je spam mailbox.",
  login_password_was_reset: "😃 Je paswoord is opnieuw ingesteld",
  login_email_confirmed: "😃 Bedankt om je e-mail te bevestigen!",

  register_header: "Account aanmaken",
  register_login_details: "Aanmeldings info",
  account_personal_info: "Persoonlijke info",
  account_first_name: "voornaam...",
  account_last_name: "achternaam...",
  account_player_name: "bijnaam...",
  account_player_name_warning: "Gebruik niet jouw echte naam als bijnaam!",
  account_organisation: "organisatie...",
  account_country: "land...",
  account_year_of_birth: "geboortejaar...",
  account_email: "e-mail...",
  account_license_key_stub: "licentie sleutel...",
  account_premium_missing: "premium lidmaatschap",
  account_premium_active: "premium lidmaatschap is actief 😃",
  account_premium_inactive: "premium lidmaatschap is inactief 😕",
  account_license_key_tip: "Je licentie sleutel zit in je orderbevestiging email.",
  register_password: "kies jouw paswoord...",
  register_user_name_invalid: "😕 Bijnaam mag alleen letters en nummers bevatten",
  register_confirm_password: "bevestig jouw paswoord...",
  register_email_invalid: "😕 Ongeldig email adres",
  register_password_invalid: (length: number) => `😕 Ongeldig paswoord (minstens ${length} tekens)`,
  register_age_invalid: (minYear: number, maxYear: number) => `😕 Ongeldige geboortedatum (${minYear} - ${maxYear})`,
  register_passwordConfirm_invalid: "😕 Paswoord moet zelfde zijn als hierboven",
  register_not_agreed: "Gelieve akkoord te gaan om te registeren",
  register_agree_prefix: "Ik ga akkoord met de ",
  register_agree_terms: "algemene voorwaarden",
  register_agree_suffix: " van deze website.",
  register_field_required: "😕 Dit veld is vereist",
  register_age_agreement: "Ben je jonger dan 16? Dan moet je de e-mail van een ouder of bevoegd persoon invullen",

  reference_manual: "Referentie handleiding",
  users_guide: "Gebruikers handleiding",

  see_also: "Zie ook:",

  gender_male: "Jongen",
  gender_female: "Meisje",
  gender_other: "Anders",

  goto_my_profile: "Mijn account",
  profile_header: "Mijn account",
  profile_my_account: "Mijn account",
  profile_delete_my_account: "Mijn account verwijderen",
  profile_account_updated: "😃 Je gegevens werden aangepast",
  profile_request_data: "Persoonlijke data opvragen",
  profile_request_deletion_data: "Persoonlijke data verwijderen",

  language_choose_language: "Kies een taal",

  footer_legal: `Legal`,
  footer_contact: "Contact",

  resolution_not_supported: "😕 Resolutie niet ondersteund",
  screen_size_too_small: (width: number, height: number) => `📺 Je scherm heeft een resolutie van ${width}×${height};\ndit is te klein voor ViKiD's minimum (${config.minLargestViewSize}×${config.minSmallestViewSize}).\n\n🔍 Probeer de webpagina uit te zoomen,\n \n🖥 desktop mode aan te zetten\n,🖥️ of gebruik een toestel met een groter scherm,\n💻 zoals een laptop of grote tablet.`,
  screen_width_too_small: (width: number) => `📺 Je scherm heeft een CSS breedte van ${width};\ndit is te klein voor ViKiD's minimum (${config.minReadingViewWidth}}).\n\n↻ Probeer je scherm te draaienm 🔍 de webpagina uit te zoomen,\n\n🖥 desktop mode aan te zetten\n,🖥️ of gebruik een toestel met een groter scherm,\n💻 zoals een laptop of grote tablet.`,


  portrait_not_supported: "😕 Staand scherm niet ondersteund",
  landscape_request_rotation: "↻ Draai je toestel naar de 🖵 liggende stand.",

  module_importer_title: "⬡ Module importeren",

  media_exporter_title: "🎥 Media exporter",
  media_exporter_file: "Bestandsnaam",
  media_exporter_no_file: "(geen)",
  media_exporter_width: "Beeld breedte",
  media_exporter_height: "Beeld hoogte",
  video_fps: "Videobeeldsnelheid",
  video_duration: "Video lengte",
  video_bit_rate: "Video bit-rate",
  video_bit_rate_unit: "megabits/seconde",
  video_codecs: "Video codecs",
  webm_precise: "Gebruik frame accurate software codec?",
  export_grid: "Toon achtergrond raster?",

  start: "Start!",
  abort: "Onderbreek...",
  done: "Klaar",
  pixels: "pixels",
  seconds: "seconds",
  per_second: "per seconde",
  image_quality: "GIF kwaliteit",

  extract_primitive: (currentLetLabel: string, kind: string) => `${puzzle_error_in_let(currentLetLabel)}Het type '${kind}' is niet toegestaan in puzzel blokken.\n\nEnkel primitieve waarden kunnen gebruikt worden.`,
  extract_set_type: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Aanpasbare getallen van type ℝ zijn niet toegestaan in puzzel blokken.\n\nEnkel ℕ, ℤ and ℚ kunnen gebruikt worden.`,
  extract_wrong_order: (currentLetLabel: string, referencedLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Foute volgorde van formules.\n\nDe formule '${referencedLetLabel}' moet vóór de formule '${currentLetLabel}' staan zijn in een puzzel`,
  extract_feedback_ref: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}De derde parameter van de functie ∞\nmoet een verwijzing zijn naar een formule in hetzelfde sub-programma`,
  extract_redundant_lets: (lets: string) => `${puzzle_error_in_prog}De formules ${lets} worden niet gebruikt in het eindresultaat.\n\nDit is niet toegelaten in een puzzel.\n\nGebruik de functie 🎁 om een formule te markeren als een voorbeeld,\nof verwijder de formules.`,
  extract_nested_seq: `${puzzle_error_in_prog}Sub-programma's zijn niet toegelaten in een puzzel.`,
  extract_nev: `${puzzle_error_in_prog}'Nooit' expressies worden nog niet ondersteund in een puzzel.`,
  extract_puzzle_mode_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Niet ondersteunde waarde voor de parameter van 🧩.\n\nDe 🧩 functie zet de puzzel mode. 🧩0 = bouw modus, 🧩1 = vrije modus`,
  extract_puzzle_anim_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Niet ondersteunde waarde voor de parameter.\n\nDe puzzel cycle functie zet de puzzel animatie cyclus duurtijd, in seconden`,
  extract_puzzle_multi: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Een formule kan slechts één maal de functie 🧩 bevatten.\n\nDe 🧩 functie zet de puzzel mode. 🧩0 = bouw modus, 🧩1 = vrije modus`,
  extract_premade_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Niet ondersteunde waarde voor de parameter van 🎁.\n\nDe 🎁 functie specifieert een voorgemaakt onderdeel van de formule.\n\n🎁(uit) = voorgemaakte puzzel, 🎁(aan) voorgemaakt niet aanpasbaar voorbeeld`,
  extract_premade_multi: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Een formule kan slechts één maal de functie 🎁 bevatten.\n\nDe 🎁 functie specifieert een voorgemaakt onderdeel van de formule.\n\n🎁(uit) = voorgemaakte puzzel, 🎁(aan) niet aanpasbaar voorbeeld`,
  extract_select_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Niet ondersteunde waarde voor de parameter van 🟨.\n\nDe 🟨 functie specifieert de initiele selectie in de formule.\n\n🟨(uit) = selecteer de waarde, 🟨(aan) = selecteer de functie`,
  extract_actuator_param: (currentLetLabel: string, index: number) => `${puzzle_error_in_let(currentLetLabel)}Niet ondersteunde waarde voor parameter #${index} van functie 👁️.\n\nDe eerste parameter moet 0, 1 (oog) of 2 (oor) zijn.\n\nDe tweede parameter moet een verwijzing zijn naar de 'actuator' formule.`,
  extract_import_error: (currentLetLabel: string, importName: string) => `${puzzle_error_in_let(currentLetLabel)}Geimporteerde sjablonen worden nog niet ondersteund.\n\nZie sjabloon '${importName}'`,
  extract_no_step_order: `${puzzle_error_in_prog}Volgorde van stappen kon niet bepaald worden.`,

  vector: "Vector",
  point: "Punt",
  transformation: "Transformatie",

  undo: "Ongedaan maken",
  redo: "Opnieuw toepassen",

  ui_zoom_in: "UI vergroten",
  ui_zoom_out: "UI verkleinen",
  ui_enter_full_screen: "UI op volledig scherm",
  ui_exit_full_screen: "UI op normaal scherm",

  www_enter_full_screen: "Toon de web header op een volledig scherm.\n\nDruk lang (of ALT+klik)\nom de header te openen in een nieuwe tab.",
  www_refresh_source: "↻ Herlaad de web header pagina",

  output_enter_full_screen: "Speel op volledig scherm",
  output_exit_full_screen: "Speel op normaal scherm",

  output_pin_selected: "Zet vast op selectie",
  output_unpin_selected: "Maak los",

  skill_junior: "Niveau: junior",
  skill_medior: "Niveau: medior",
  skill_senior: "Niveau: gevorderd",
  skill_alien: "Niveau: alien",
  skill_internal: "Niveau: geheim",

  about: "Over ViKiD",
  build: "Bouwen",
  forum: "Forum",
  play: "Spelen",
  learn: "Leren",
  login: "Aanmelden",
  logout: "Afmelden",
  welcome: "Welkom ",
  player: "Speler",
  register: "Registreren",
  social: "Social",
  shop: "Shop",
  hello: "Hallo",
  slogan_RCP: "Jouw Reactief Creatie Platform",
  credits: "Credits",
  licenses: "Licenties",

  minus_prefix: "min ",

  puzzle_level: "level",
  puzzle_stage: "stage",
  puzzle_score: "score",
  puzzle_ended: "😃 Dit was voorlopig de laatste puzzel.\n\nIn de volgende update zitten er misschien nieuwe!",

  please_wait: "😴 Even geduld aub",

  play_as_puzzle: "Speel het programma als een puzzel",
  play_as_puzzle_button: "Speel het programma als een puzzel,\nbeginnend bij de actieve formule.",
  play_as_puzzle_tooltip: "The actieve formule bepaalt de eerste puzzel stap.",

  export_video: "Exporteer video (GIF/WebM/MP4)",
  export_image: "Exporteer afbeelding (JPEG/WebP/PNG)",
  export_html_page: "Download als web-pagina (HTML)",
  export_html_site: "Download als web-site (ZIP)",
  export_html_page_tooltip: "🌍 De web-pagina kan je op elk toestel openen met een moderne web-browser.",
  export_html_site_tooltip: "⚠️ De web-site moet je zelf hosten op een externe web-server.",

  list_plain: "Pas de functie toe op de lijst zelf",
  list_map: "Pas de functie toe op elk element in de lijst (map)",
  list_reduce: "Gebruik de functie om alle elementen te reduceren tot een waarde (reduce)",

  my_programs: "Mijn programma's",
  my_templates: "Mijn sjablonen",
  my_trashcan: "Mijn prullenbak",
  examples: "Voorbeelden",
  new_program: "Maak nieuw programma",
  open_program: "Open dit programma",
  templates_empty: "Je hebt geen sjablonen.",
  examples_empty: "Er zijn nog geen voorbeelden.",
  trashcan_empty: "Je prullenbak is leeg.",
  modules_empty: "Je hebt geen sjablonen met de 'module' tag",

  program_name: "Geef je programma een naam",
  my_program: `Mijn programma`,

  save_script: "Sla dit programma op",
  download_script: "Download dit programma naar je toestel",
  upload_script: "Upload een programma van je toestel",
  share_script: "Deel je programma met anderen",
  share_puzzle: "Deel je programma als een puzzel",

  warn_unsaved: {
    message: "⚠️ Je hebt je programma gewijzigd zonder op te slaan.\n\n❗ Als je verder gaat, verlies je je wijzigingen!",
    yes: "Ga verder",
    no: "Ga terug",
  },

  media_export_failed: "⚠️ Media kon niet geëxporteerd worden",
  html_export_failed: "⚠️ De HTML pagina kon niet geëxporteerd worden",
  html_export_warning: "⚠️ Er liep iets mis tijdens de export",

  showSaveFilePicker_missing: "😕 Deze browser biedt geen ondersteuning om bestanden te kiezen.\n🖥️ Gebruik aub een op Chromium gebaseerde browser, zoals Google Chrome of Microsoft Edge.",

  copy_script_text: "Kopieer het programma naar je klembord (tekst)",
  copy_script_json: "Kopieer het programma naar je klembord (JSON)",
  paste_script: "Plak het programma uit je klembord",

  import_module: "Importeer een 'module' sjabloon",
  show_list_item_methods: "Toon functies op de elementen in de lijst?",

  make_adjustable: "Maak aanpasbare parameter",
  remove_adjustable: "Verwijder aanpasbare parameter",
  adjust_parameters: "Parameters aanpassen",

  make_broadcaster: "Maak actieve formule beschikbaar in sub-programma's",
  remove_broadcaster: "Verberg actieve formule voor sub-programma's",
  warning: "⚠️ Opgelet!",
  body_break_broadcaster: (paths: string) => `⚠️ Het verbergen van de actieve formule voor sub-programma's\nzou de volgende 🔗 links in geneste formules breken:\n\n${paths}\n\n🛠️ Je zal je programma hierna moeten herstellen, of annuleer en\n💡 gebruik SHIFT + 🖱️RECHTER MUISKNOP om deze links te vinden.`,
  button_break_broadcaster: "Breek links!",
  // in_use_broadcaster: (paths: string[]) => `⚠️ Kan de actieve formule niet verbergen voor sub-programma's\nomdat deze 🔗 links ernaar verwijzen:\n\n${paths.join("\n")}\nGebruik (SHIFT + RECHTER MUISKNOP 🖱️) op de actieve formule om deze links te vinden,\nof gebruik SHIFT+CLICK op deze knop om de links te breken.`,

  make_active_track: "Maak actief spoor",
  remove_active_track: "Verwijder actief spoor",

  make_message_track: "Maak berichten spoor",
  remove_message_track: "Verwijder berichten spoor",

  make_eye_track: "Maak visueel spoor",
  remove_eye_track: "Verwijder visueel spoor",

  make_ear_track: "Maak audio spoor",
  remove_ear_track: "Verwijder audio spoor",

  make_effect_track: "Maak audio spoor",
  remove_effect_track: "Verwijder audio spoor",

  edit_web_header: "Wijzig web pagina header URL",
  invalid_web_header_url: "Ongeldige web pagina header URL.\nDeze moet leeg zijn om de web header te verwijderen,\nof een absolute URL die begint met http of https.",

  create_script_thumb: "Sla een miniatuur van het programma op",

  check_answer: "❓ Is mijn oplossing juist?",
  wrong_answer: "😕 Niet helemaal juist. De rode blokjes geven de fouten aan. Pas je programma aan, en probeer nog eens!",
  right_answer: "🤩 Helemaal correct!",
  next_puzzle: "Klik om verder te gaan",

  invalid_file: "😕 Dit bestand kan niet verwerkt worden",
  unsupported_file: "😕 Dit bestand is niet ondersteund",
  corrupted_file: "😕 Dit bestand lijkt beschadigd",
  missing_file: "😕 Dit bestand lijkt niet te bestaan",
  invalid_clipboard: "😕 De gegevens in het klembord worden niet ondersteund",
  paste_not_allowed: "😕 De gegevens in het clipboard kunnen hier niet geplakt worden",
  invalid_script: "😕 Ongeldige script tekst",

  split_formula: "Splits de formule in twee delen",
  swap_arguments: "Wissel de functie parameters van plaats",
  // insert_formula_before: "Voeg een nieuwe formule toe voor de actieve formule",
  append_formula_after: "Voeg een nieuwe formule toe na de actieve formule",
  delete_formula: "Verwijder het aangeduide onderdeel van de formule",
  append_formula: "Voeg een nieuwe formule toe",
  create_reference_to: "Maak een link naar een andere formule",
  break_reference_to: "Breek de link naar de formule",

  move_binding_up: "Zet de formule eerder in de lijst",
  move_binding_down: "Zet de formule later in de lijst",
  delete_binding: "Verwijder de actieve formule",
  delete_bindings: "Verwijder de geselecteerde formules",
  copy_bindings: "Kopieer de geselecteerde formule(s) naar het klembord",
  paste_bindings: "Plak formules uit je klembord",
  duplicate_binding: "Dupliceer de actieve formule",
  rename_binding: "Geef een naam aan de actieve formule",
  group_bindings: "Groepeer de geselecteerde formules in een sub-programma",
  ungroup_bindings: "Koppel de formules los van het geselecteerde sub-programma",
  enter_sub_program: "Navigeer in sub-programma",
  leave_sub_program: "Navigeer uit sub-programma",
  create_simple_reference: "🔗 Maak een link naar deze formule",
  create_reference: "🔗 Maak een link naar deze formule\n\n🎞️ Druk lang om de link één update te vertragen",
  pick_instance: "Kies aangepaste instantie",
  filter_instances: "Toon alle/huidige/verleden/toekomstige instanties",
  enter_selection_mode: "◻ Activeer multi-selectie mode.\n🖥️Op desktop kan je CTRL & SHIFT klikken op de formules.\n👍Op tablet kan je lang drukken op een formule.\n",
  exit_selection_mode: "◻ Deactiveer multi-selectie mode",
  work_in_progress: "work-in-progress!",

  forbid_reference: "😕 Je kan geen link maken naar deze formule",
  cyclic_reference: "😕 Een link naar deze formule zou een oneindige lus maken!",
  cyclic_reference_warning: (cycle: Let[]) => `⚠️ Een link naar deze formule zou een oneindige lus maken!\n\n${cycle.map(b => b.label).join("→")}\n\n🛈 Gebruik bvb de functie 'combineren' om een lus te maken.\n🛈 Druk lang om een link te maken vertraagd met één update.`,

  signature_output: "uitvoer",
  signature_input: "invoer",
  signature_make: "maak",
  signature: "Signatuur",
  synopsis: "Synopsis",

  more_script_tools: "Meer...",

  shared_project_to_clipboard: "🔗 Een link naar je programma is gekopieerd op het klembord.\n\n🌟 Plak em waar je maar wil, bvb in een email, of op\n\n👍 Facebook, Instagram, Twitter, Discord, Skype, WhatsApp, ...",
  share_project_to_clipboard: "🔗 Kopieer onderstaande link.\n\n🌟 Plak em waar je maar wil, bvb in een email, of op\n\n👍 Facebook, Instagram, Twitter, Discord, Skype, WhatsApp, ...",

  user_registration_confirmed: "🤩 Je email adres werkt!\n\nJe kan nu in de playground er op los bouwen!",
  user_registration_completed: "🤩 Bedankt om te registeren!\n\n📧 Je zal een e-mail ontvangen om je account te activeren.\n\n🕵 Controleer ook zeker je spam mailbox!",
  not_signed_in: "😕 Je moet ingelogd zijn om toegang te krijgen.\n\n↻ Herlaad de web-pagina als inloggen niet lukt.",
  tutorial_not_played_title: "Voldoende ervaring?",
  tutorial_not_played: (count: number) => `⚠️ Om ViKiD te leren, is het aangeraden om minstens\n🧩 ${count} puzzels op te lossen in de tutorial.\n\n❓ Wil je ons puzzel spel eerst proberen?`,
  no_access: "😕 Je hebt geen toegang tot deze module.\n\n💰 Als je deze module gekocht hebt, log dan eerst uit,\n\n↻herlaad de pagina, en log opnieuw in.",
  resource_not_found: "😕 Deze pagina bestaat niet.\n\n❓ Heb je de juiste URL ingevoerd in de adres balk?\n\n↻ Probeer het nog eens",
  sandbox_requires_account: "👓 Om de math-e-magic achter dit programma te zien,\n\n⚠️ moet je inloggen of een ViKiD account maken.",

  restart_clock: "Herstart de klok",
  faulted_clock: "😕 Sorry, er is een interne fout in de simulatie opgetreden",
  timeout_clock: "⚠️ De klok is gestopt omdat je script\nde interface te hard zou vertragen.\n\nProbeer je script te verbeteren,\nen klik om opnieuw te starten.\n",
  start_clock: "Start de klok",
  stop_clock: "Stop de klok",
  step_clock: "Tik de klok",
  rewind_clock: "Tik de klok achteruit",
  debug_clock: "Tijd stempels?",

  puzzle_restart: "Begin opnieuw",

  toggle_syntax: "Toggle syntax",

  navigate_back: "Ga naar de vorige pagina",
  navigate_home: "Ga naar de start pagina",

  open_menu: "Open een menu met meer acties",

  upgrade_vikid: "😕 Dit programma vereist een nieuwere versie van ViKiD\n\nHerlaad de web-pagina en probeer het nog eens.",

  binding_filter: "Typ om te filteren",

  shapes_pick: "vormen",
  shapes_paint: "kleuren",
  shapes_layer: "lagen",
  shapes_layer_drill: "lagen",
  shapes_layers: "kleuren & lagen",
  shapes_nesting: "geneste lagen",
  shapes_cutting: "snijden",
  shapes_translations: "verschuiven",
  shapes_basic_compositions: "eenvoudig samenstellen",
  shapes_grow: "schalen, vergroten",
  shapes_shrink: "verkleinen & stappen",
  shapes_rotate: "rotatie & animatie",

  square: "vierkant",
  circle: "cirkel",
  plane: "vlak",
  half_plane: "halfvlak",
  heart: "hart",
  droplet: "druppel",
  star: "ster",
  spade: "schop",
  clover: "klaver",
  rhombus: "ruit",
  eye: "oog",
  nimbus: "regenwolk",
  lion: "leeuw",
  monkey: "app",
  flower: "bloem",
  sunset: "zonsondergang",
  blue_square: "blauw vierkant",
  red_heart: "rood hart",
  orange_fish: "goudvis",
  smiley: "smiley",
  almond: "amandel",
  crescent_moon: "afnemende maan",
  keyhole: "sleutelgat",
  ball: "bal",
  padlock: "hangslot",
  alien: "alien",
  envelope: "envelope",
  ghost: "spook",
  pacman: "Pac-Man",
  tennisball: "tennisbal",
  sun_behind_cloud: "zon achter wolk",
  clown: "clown",
  face: "gezicht",
  hourglass: "zandloper",
  eyes: "ogen",
  phone: "telefoon",
  radioactive: "radioactief",
  clock: "klok",
  cycle: "cyclus",

  build_this: "Kan je dit <b>blauwe vierkant nabouwen</b>...",
  these_values: "door deze <b>waarden</b>...",
  these_functions: "en deze <b>functies</b>...",
  this_formula: "in deze <b>formule</b> te gebruiken? De <b>gele vinger</b> zal je tonen hoe!",

  click_square: "Klik op de waarde <b>'vierkant'</b>...",
  // clicked_square: "Het vierkant komt zo in je <b>formule</b>, en is <b><S>geselecteerd</S></b>.",
  click_paint: "Klik op de functie <b>'geverfd'</b> ...",
  explain_output: "Lees de formule <i>van links naar rechts: </i><b>vierkant geverfd in blauw</b> ⟶ <b>blauw vierkant</b>",
  //change_selected_param: "Laten we de <b><S>geselecteerde</S> parameter aanpassen</b>",

  click_color: "Klik op de waarde <b>'blauwe kleur'</b>...",
  clicked_color: "De <b><S>geselecteerde</S> parameter</b> is nu blauw...",
  explain_blue_result: "en het <b>resultaat</b> is nu: <i>een vierkant, geverfd in het blauw</i>",

  explain_grading: "Als je formule fout is, verschijnen hier <b>rode blokjes</b>...",
  explain_correct: "Helemaal juist! Klik hier om naar <b>de volgende puzzel</b> te gaan</b>.",

  click_to_proceed: "Klik op deze knop om naar <b>de volgende puzzel</b> te gaan.",
  click_grade_button: "Je <b>formule is nu klaar</b>; klik hier om ze te controleren.",

  explain_tutorial: "<b>We leggen stap-per-stap uit hoe ViKiD werkt.</b><br/><br/><i>Als je een stap gemist hebt, herstart dan met <b>deze knop</b></i>.<br/></br>Klik eender waar om verder gaan.",

  explain_single_use: "Je mag elk blok maar één keer gebruiken!",
  explain_restart: "Als je vastzit, klik dan hier <b>om opnieuw te beginnen</b>...",
  explain_undo: "of hier <b>om één wijziging ongedaan te maken</b>...",
  explain_delete: "of hier <b>om een blok te verwijderen</b> uit de formule.",
  explain_solo: "Je bent nu helemaal klaar om <b>zelf deze puzzel te maken</b>!",

  explain_swap_args_click: "Om de <b>parameters van plaats te wisselen</b>, kan je dubbel-klikken op de functie...",
  explain_swap_args_icon: "of je kan <b>deze knop gebruiken</b>.",
  explain_chaining_concept: "Je kan ook op <b>het resultaat een functie toepassen</b>...",
  explain_chaining_selection: "<b><S>Selecteer</S> het resultaat</b> door erop te klikken...",
  explain_chaining_method: "en <b>klik dan op de functie</b> die je wil toepassen.",

  explain_parameter_method: "Je kan ook een <b>functie toepassen op een parameter</b>...",
  explain_parentheses: "De nieuwe geneste formule wordt <b>tussen haakjes gezet</b>.",

  explain_delete_app: "Je kan ook een <b>functie toepassing verwijderen</b>...",
  explain_delete_icon: "door een <b>klik op deze <b>knop</b>, of met DELETE toets.",

  explain_multiple_formulas: "<b>Programma's</b> kunnen bestaan uit <b>meerdere formules!</b>",
  explain_multiple_formulas_step: "Bouw elke formule apart, <b>stap per stap</b>.",
  explain_multiple_formulas_grade: "Als je <b>klaar bent met de huidige formule, klik dan hier</b>.",
  explain_multiple_formulas_next: "Bouw nu <b>de volgende formule</b>, op dezelfde manier.",
  explain_create_ref: "Om te <b>verwijzen</b> naar een <b>eerder gebouwde formule</b> klik je op de <b>ketting</b> knop.",
  explain_created_ref: "Proficiat, je hebt zonet je eerste <b>verwijzing</b> naar een formule gemaakt!",
  explain_apply_ref: "<b>Pas nu een functie toe</b> op deze verwijzing, en los de formule op.",
  explain_multiple_refs: "Als je <b>meerdere verwijzingen</b> kan maken,<br/>toont het <b>getal onder de ketting</b> hoeveel er nog zijn.",

  explain_fine_number_editing: "Om een getal in <b>kleinere stapjes</b> aan te passen, <b>versleep je het midden van de knop</b>.",
  explain_number_set_types: "Gebruik deze knoppen om de <b>getallen verzameling</b> in stellen.",
  explain_integer_set_type: "Als voorbeeld, <b>klik op de `gehele getallen` knop</b>, en verplaats de vorm",
  explain_toggle_literal: "Om het <b>teken van een getal om te draaien</b>, gebruik de <K>-</K> toets, of <b>dubbelklik</b>.",

  explain_debug_toolbar: "Met deze knoppen kan je de simulatie <b>(her)starten, stoppen en pauzeren</b>.",

  known_issues: "Gekende problemen",
  github: "GitHub",
  youtube: "YouTube",
  facebook: "Facebook",
  discord: "Discord"
};
