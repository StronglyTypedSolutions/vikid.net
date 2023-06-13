import { Let, MethodId, TemplateMethodId } from "@vikid-mod/language";
import { Language } from "locale";
import config from "@vikid-core/config";
import { groups } from "./groups";
import { methods } from "./methods";
import { puzzles } from "./puzzles";
import { sensors } from "./sensors";
import { primitives, values } from "./values";
import { FeatureKey, Features } from "../types";
import { assertNever } from "@vikid-core";

const puzzle_error_in_prog = `🐞 Error in puzzle program:\n\n`;
const puzzle_error_in_let = (currentLetLabel: string): string => `🐞 Error in puzzle formula '${currentLetLabel}':\n\n`;

export const en = {
  language: "en" as Language,

  features: {
    upload: "Uploading assets to the ViKiD cloud",
    rewind: "Time-travel debugging",
    templatize: "Creating program templates",
    generic: "This function",
    video: "Exporting videos",
    image: "Exporting images",
    html: "Exporting HTML",
    share: "Sharing puzzles",
    instances: "Inspecting adjusted instances"
  } as Features,

  methods,
  values,
  primitives,
  sensors,
  groups,
  puzzles,

  adjustableParameter: (name: string, index: number) => `<${name || "parameter"}@${index}>`,

  recent: "recently",

  pending: "pending",

  more: "related...",
  parameter: "parameter",
  type: "type",
  types: "types",
  functions: "functions",
  concepts: "concepts",
  fundamentals: "fundamentals",
  pure_functions: "pure functions",
  actual_functions: "actual functions",
  points_and_vectors: "points & vectors",
  angles: "angles",

  toggle_type_filter: "click to toggle input type filter",

  visitor: "visitor",

  loading: "loading...",
  failed: "😢 failed to load",
  delete: "Delete",
  undelete: "Restore",
  templatize: "Move to templates",

  common_next: "Next",
  common_previous: "Previous",
  common_disagree: "No thanks",
  common_cancel: "Cancel",
  common_save: "Save",
  common_agree: "Yes, please",
  common_ok: "Ok",

  common_delete: "Delete",

  common_success_title: "Success!",
  common_error_title: "Error!",

  generic_error: `😢 Oops!\n\n🐞 Something went wrong.\n\n↻ Please try again.`,

  generic_api_error: "😢 Oops!\n\n🐞 The ViKiD backend responsed with an error.\n\n↻ Please try again..",
  reload_api_error: "😢 Oops!\n\n🐞 The ViKiD backend responsed with an error.\n\n↻ Please reload the web-page.",
  uncaught_fatal_error: "😢 Oops!\n\n🐞 Something unexpected happened!\n\n↻ Please reload the web-page and try again.",
  uncaught_fatal_edit_error: "😢 Oops!\n\n🐞 Something unexpected happened! ↻ Please reload the web-page and try again.\n\n⛑️ If a crash file was downloaded, then you can ⮹ import this to continue your work.",

  puzzle_load_error: (id: string) => `😢 Oops!\n\n🐞 Failed to load puzzle '${id}.\n\n↻ Please reload the web-page and try again.`,
  puzzle_preview_error: `🧩 Conversion to puzzle failed.`,

  account_not_found_title: "Account not found!",
  account_not_found: "❓ Oops, ViKiD doesn't know you yet.\n\n🚹 Do you want to create a new account?",
  account_conflict_email: "😢 Oops, an account with the same e-mail address already exists.\n\n✏️ ViKiD is going to try to sign you in.",
  account_conflict_user_name: "😢 Oops, an account with the same username already exists.\n\n✏️ Try using a different username.",
  account_conflict_user_name_short: "This username is already in use.",
  account_conflict_license_key: "😢 Oops, another account is already using this license key!",

  no_clipboard_read: `😢 Your browser has no clipboard support.\n✏️ Please paste your text below.`,
  script_load_error: (progId: string) => `😢 Oops!\n\nProgram '${progId}' couldn't be loaded!`,
  script_save_error: (progId: string) => `😢 Oops!\n\nProgram '${progId}' couldn't be saved!`,
  thumb_save_error: (progId: string) => `😢 Oops!\n\nThumbnail of '${progId}' couldn't be saved!`,
  script_clipboard_error: (progId: string) => `😢 Oops!\n\nProgram '${progId}' couldn't be stored into the clipboard!`,
  script_delete_error: (progId: string) => `😢 Oops!\n\nProgram '${progId}' couldn't be deleted!`,
  script_restore_error: (progId: string) => `😢 Oops!\n\nProgram '${progId}' couldn't be restored!`,
  confirm_delete_program: (title: string, type: "program" | "template") => `❓ Are you sure you want to delete ${type} '${title}'?\n\n⚠️ After a few days this cannot be undone anymore!`,
  agree_delete: "Yes, delete it",

  module_import_error: (progId: string) => `😢 Oops!\n\nProgram '${progId}' couldn't be imported as a module!`,
  module_has_main_refs: (progId: string, paths: string) => `⚠️ Program '${progId}' couldn't be imported as a module,\n🔗 because is has root references to the main sub-program ⌂.\n\n⛔ This is not yet supported.\n\n🔗 The following references need to be broken:\n\n${paths}`,

  templatization_error: (progId: string) => `😢 Oops!\n\nProgram '${progId}' couldn't be converted to a template!`,
  request_template_tags: `\n🔩 Give at least one tag to your template.\n\n🛈 Use a space to separate the tags.\n\n⬡ The 'module' tag enables import in the playground.\n`,
  edit_template_tags: `🔩 Edit template tags.`,
  edit_template_title: `Open template`,
  edit_template_question: `❓ How would you like to use the program of this template?`,
  edit_template_duplicate: `⎘ Duplicate`,
  edit_template_modify: `✎ Modify`,

  script_moved_to_trashcan: <p><span>Moved to</span><br /><br /><b>trashcan</b></p>,
  script_moved_to_templates: <p><span>Moved to</span><br /><br /><b>templates</b></p>,
  script_moved_to_programs: <p><span>Moved to</span><br /><br /><b>programs</b></p>,

  upload_into_cloud: "☁ Upload images and sound into the ViKiD cloud",
  upload_content_generic_error: `😢 Oops!\n\nThe file upload failed.`,
  upload_content_too_large: (mb: number) => `😢 Oops!\n\nThe file is too large to be uploaded!\n\nThe maximum allowed size is ${mb} megabyte.`,
  feature_premium_members_only: (feature: FeatureKey) => `🛈 ${en.features[feature]} requires a premium membership.\n\n🛒 Do you want to visit our e-shop for more info?`,
  premium_members_only_title: `🥇 Premium members only`,
  waiting_premium_member_sale: <div><h1>🥇 Waiting for your subscription to be processed...</h1><br /><h2>⏳ This can take a few minutes.</h2><br /><em>🛈 You can also paste the license key from the order confirmation email in your account page.</em></div>,
  premium_member_sale_successful: <p><h1>🥇 You are now a Premium Member!</h1><br /><br /><span>😍 Warm thanks from the ViKiD team, you are amazing!</span></p>,
  premium_member_sale_header: "Premium membership",
  cookies_ViKiD_keeps: "ViKiD stores",
  cookies_on_this_pc: "on this computer.",
  cookies_thanks_to_cookies: "Thanks to cookies we can keep you signed in, remember your game progress, personalise your experience, and improve ViKiD. Sign-in cookies are neccessary.",
  cookies_we_value_privacy: "We respect your privacy and protect your data.",
  cookies_explain_link: "https://kids.kiddle.co/HTTP_cookie",

  shop_coming_soon: <h1>Coming soon!</h1>,
  shop_redirect: "Redirecting to shop...",

  consent_agree_all_cookies: "Accept all neccessary and optional cookies",
  consent_agree_selected_cookies: "Accept all neccessary and selected cookies",
  consent_agree_telemetry_cookies: "Accept analytics cookies?",

  gdpr_not_yet_automated: `⚠️ This is not yet automated`,
  gdpr_send_email: (username: string) => `📧 Please send an email to gdpr@vikid.net,\nmentioning your username '${username}'`,

  login_header: "Sign-in",
  login_header_password: "Password?",
  login_email: "e-mail",
  login_password: "password",
  login_denied_title: "Login denied!",
  login_denied: "🤔 Access is denied.\n\n🔑 Do you want to reset your password?",
  login_email_invalid: "😕 Invalid e-mail address.",
  login_password_required: "😕 Your password is required to sign-in.",
  login_link_register_instead: "New user?",
  login_link_forgot_password: "Forgot your password?",
  login_header_forgot_password: "Forgot your password",
  login_header_reset_password: "Reset password",
  login_password_reset_email: "📧 We have sent you an e-mail with which you can choose a new password. \n\n🕵 Be sure to check your spam mailbox.",
  login_password_was_reset: "😃 Your password has been reset",
  login_email_confirmed: "😃 Thanks for confirming your e-mail address!",

  register_header: "Account creation",
  register_login_details: "Registration info",
  account_personal_info: "Personal info",
  account_first_name: "first name...",
  account_last_name: "last name...",
  account_player_name: "username...",
  account_player_name_warning: "Don't use your real name as username",
  account_organisation: "organisation...",
  account_country: "country...",
  account_email: "e-mail...",
  account_year_of_birth: "year of birth",
  account_license_key_stub: "license key...",
  account_premium_missing: "premium membership",
  account_premium_active: "premium membership is active 😃",
  account_premium_inactive: "premium membership is inactive 😕",
  account_license_key_tip: "Your license key is in your order confirmation email",
  register_password: "choose your password ...",
  register_user_name_invalid: "😕 Username can only contain numbers and letters",
  register_confirm_password: "confirm your password ...",
  register_email_invalid: "😕 Invalid email address",
  register_password_invalid: (length: number) => `😕 Invalid password (must be at least ${length} characters)`,
  register_age_invalid: (minYear: number, maxYear: number) => `😕 Invalid birthyear (${minYear} - ${maxYear})`,
  register_passwordConfirm_invalid: "😕 Password must be the same as above",
  register_not_agreed: "Please agree to register",
  register_agree_prefix: "I agree with the ",
  register_agree_terms: "Terms and Conditions",
  register_agree_suffix: " of this website.",
  register_field_required: "😕 This field is required",
  register_age_agreement: "Are you under 18? Then you must fill in the email of a parent or qualified adult, and notify this person",

  reference_manual: "Reference manual",
  users_guide: "User guide",

  see_also: "See also:",

  gender_male: "Boy",
  gender_female: "Girl",
  gender_other: "Other",

  goto_my_profile: "My account",
  profile_header: "My account",
  profile_my_account: "My account",
  profile_delete_my_account: "Delete my account",
  profile_account_updated: "😃 Your data has been adjusted ",
  profile_request_data: "Request personal data",
  profile_request_deletion_data: "Delete personal data",

  language_choose_language: "Choose a language",

  footer_legal: `Legal`,
  footer_contact: "Contact",

  resolution_not_supported: "😕 Resolution not supported",
  screen_size_too_small: (width: number, height: number) => `📺 Your screen has a CSS resolution of ${width}×${height};\nthis too small for ViKiD's minimum (${config.minLargestViewSize}×${config.minSmallestViewSize}).\n\n🔍 Try zooming out the webpage,\n🖥 or enable desktop modus,\n 🖥️ or use a device with a larger screen,\n💻 like a laptop or large tablet.`,
  screen_width_too_small: (width: number) => `📺 Your screen has a CSS width of ${width};\nthis too small for ViKiD's minimum (${config.minReadingViewWidth}).\n\n↻ Try rotating your device, 🔍 zooming out the webpage,\n🖥 enable desktop modus,\n 🖥️ or use a device with a larger screen,\n💻 like a laptop or large tablet.`,

  portrait_not_supported: "😕 Portrait mode not supported",
  landscape_request_rotation: "↻ Try rotating your device into 🖥️ landscape mode.",

  module_importer_title: "⬡ Module importer",

  media_exporter_title: "🎥 Media exporter",
  media_exporter_width: "Frame width",
  media_exporter_height: "Frame height",
  media_exporter_file: "File name",
  media_exporter_no_file: "(none)",
  video_fps: "Frame rate",
  video_duration: "Video duration",
  start: "Start!",
  abort: "Abort...",
  done: "Done",
  pixels: "pixels",
  seconds: "seconds",
  per_second: "per second",
  image_quality: "Image quality",
  video_bit_rate: "Video bit-rate",
  video_bit_rate_unit: "megabits/second",
  video_codecs: "Hardware codecs (advanced)",
  webm_precise: "Use frame accurate software codec?",
  export_grid: "Show background grid?",

  extract_primitive: (currentLetLabel: string, kind: string) => `${puzzle_error_in_let(currentLetLabel)}The type '${kind}' is not allowed in puzzle blocks.\n\nOnly primitive values can be used.`,
  extract_set_type: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Editable numbers of type ℝ are not allowed in puzzle blocks.\n\nOnly ℕ, ℤ and ℚ can be used.`,
  extract_wrong_order: (currentLetLabel: string, referencedLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Wrong order of formulas.\n\nThe formula '${referencedLetLabel}' has to appear before the formula '${currentLetLabel}' in a puzzle`,
  extract_feedback_ref: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}The third parameter of the ∞ function\nmust be reference to a formula in the current sub-program`,
  extract_redundant_lets: (lets: string) => `${puzzle_error_in_prog}The formulas ${lets} are not used in the end-result.\n\nUnused formulas are not allowed in a puzzle.\n\nUse the 🎁 function to mark formulas as pure examples,\nor delete the formulas.`,
  extract_nested_seq: `${puzzle_error_in_prog}Sub-programs are not allowed in a puzzle.`,
  extract_nev: `${puzzle_error_in_prog}'Never' expressions are not yet supported in a puzzle.`,
  extract_puzzle_mode_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Unsupported parameter value.\n\nThe puzzle mode function sets the puzzle mode:\n\n🧩0 = build mode, 🧩1 = freestyle mode`,
  extract_puzzle_anim_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Unsupported parameter value.\n\nThe puzzle cycle function sets the puzzle animation cycle duration, in seconds`,
  extract_puzzle_multi: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}🧩 can only appear once in a puzzle formula.\n\nThe 🧩 function sets the puzzle mode:\n\n🧩0 = build mode, 🧩1 = freestyle mode`,
  extract_premade_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Unsupported parameter value for 🎁.\n\nThe 🎁 function specifies a premade formula.\n\n🎁(off) = a premade puzzle, 🎁(on) = a premade non-editable example`,
  extract_premade_multi: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}🎁 can only appear once in a puzzle formula.\n\nThe 🎁 function specifies a premade formula.\n\n🎁(off) = a premade puzzle, 🎁(on) = a non-editable example`,
  extract_select_param: (currentLetLabel: string) => `${puzzle_error_in_let(currentLetLabel)}Unsupported parameter value for 🟨.\n\nThe 🟨 function specifies the initial selection in the formula.\n\n🟨(off) = select the value, 🟨(on) = select the function instead`,
  extract_actuator_param: (currentLetLabel: string, index: number) => `${puzzle_error_in_let(currentLetLabel)}Unsupported value for parameter #${index} of function 👁️.\n\nThe first parameter must be 0, 1 (eye) or 2 (ear).\n\nThe second parameter must be a reference to the 'actuator' formula`,
  extract_import_error: (currentLetLabel: string, importName: string) => `${puzzle_error_in_let(currentLetLabel)}Imported templates are not yet supported. See template '${importName}'.`,
  extract_no_step_order: `${puzzle_error_in_prog}Failed to find a sequence of steps.`,

  vector: "Vector",
  point: "Point",
  transformation: "Transformation",

  undo: "Undo",
  redo: "Redo",

  ui_zoom_in: "Zoom in UI",
  ui_zoom_out: "Zoom out UI",
  ui_enter_full_screen: "Enter full screen UI",
  ui_exit_full_screen: "Exit full screen UI",

  www_enter_full_screen: "Show the web header full screen.\n\nLong press (or CTRL+klik) to open the header in a new tab.",
  www_refresh_source: "↻ Refresh the web header page",

  output_enter_full_screen: "Play on full screen",
  output_exit_full_screen: "Play on regular screen",

  output_pin_selected: "Pin to selection",
  output_unpin_selected: "Unpin",

  skill_junior: "Skill: junior",
  skill_medior: "Skill: medior",
  skill_senior: "Skill: advanced",
  skill_alien: "Skill: alien",
  skill_internal: "Skill: secret",

  about: "About",
  build: "Build",
  forum: "Forum",
  play: "Play",
  learn: "Learn",
  login: "Sign in",
  logout: "Sign out",
  welcome: "Welcome ",
  player: "Player",
  register: "Register",
  social: "Social",
  shop: "Shop",
  hello: "Hello",
  slogan_RCP: "Your Reactive Creation Platform",
  credits: "Credits",
  licenses: "Licenses",

  minus_prefix: "minus ",

  puzzle_level: "level",
  puzzle_stage: "stage",
  puzzle_score: "score",
  puzzle_ended: "😃 This was the last puzzle for now.\n\nLook out for new puzzles in future updates!",

  please_wait: "😴 Please wait",

  play_as_puzzle: "Play the program as a puzzle",
  play_as_puzzle_button: "Play the program as a puzzle,\nstarting from the active formula.",
  play_as_puzzle_tooltip: "The active formula indicates the first puzzle step.",

  list_plain: "Apply the function on the list itself",
  list_map: "Apply the function on each element in the list (map)",
  list_reduce: "Use the function to reduce all elements in the list to a value (reduce)",

  my_programs: "My programs",
  my_templates: "My templates",
  my_trashcan: "My trash can",
  examples: "Examples",
  new_program: "Make new program",
  open_program: "Open this program",
  templates_empty: "You have no templates.",
  examples_empty: "There are no examples yet.",
  trashcan_empty: "Your trash can is empty.",
  modules_empty: "You have no templates tagged as 'module'",

  program_name: "Enter a name for your program",
  my_program: "My program",

  save_script: "Save this program",
  download_script: "Download this program to your device",
  upload_script: "Upload a program from your device",
  share_script: "Share this program with others",
  share_puzzle: "Share this program as a puzzle",

  export_video: "Export video (GIF/WebM/MP4)",
  export_image: "Export image (JPEG/WebP/PNG)",
  export_html_page: "Download as web-page (HTML)",
  export_html_site: "Download as web-site (ZIP)",
  export_html_page_tooltip: "🌍 The web-page can be openend on any device with a modern web-browser.",
  export_html_site_tooltip: "⚠️ The web-site must be hosted on an external web-server.",

  warn_unsaved: {
    message: "⚠️ You modified this program without saving it.\n\n❗ If you leave this page, you will lose your changes!\n",
    yes: "Leave",
    no: "Stay",
  },
  media_export_failed: "⚠️ Failed to export media",
  html_export_failed: "⚠️ Failed to export HTML page",
  html_export_warning: "⚠️ Something went wrong during the export",

  showSaveFilePicker_missing: "😕 Your browser doesn't support file browsing.\n🖥️ Please use a Chromium-based browser, like Google Chrome or Microsoft Edge.",

  copy_script_text: "Copy program to clipboard (text)",
  copy_script_json: "Copy program to clipboard (JSON)",
  paste_script: "Paste program from clipboard",

  import_module: "Import a 'module' template",
  show_list_item_methods: "Show functions on the list items?",

  make_adjustable: "Make adjustable parameter",
  remove_adjustable: "Remove adjustable parameter",
  adjust_parameters: "Adjust parameters",

  make_broadcaster: "Make active formula available in sub-programs",
  remove_broadcaster: "Hide active formula in sub-programs",
  warning: "⚠️ Warning!",
  body_break_broadcaster: (paths: string) => `⚠️ Hiding the active formula for sub-programs\nwould break links 🔗 in the following nested formulas :\n\n${paths}\n\n🛠️ You will need to fix your program afterwards, or cancel and\n💡 use SHIFT + 🖱️RIGHT MOUSE BUTTON to find these links.`,
  button_break_broadcaster: "Break links!",
  // in_use_broadcaster: (paths: string[]) => `⚠️ Can't hide active formule for sub-programs\nbecause the following 🔗 links refer to it:\n\n${paths.join("\n")}\nUse (SHIFT + RIGHT MOUSE BUTTON 🖱️) on the active formula to find these links,\nor SHIFT+CLICK on this button to break these links.`,

  make_active_track: "Make active track",
  remove_active_track: "Remove active track",

  make_message_track: "Make message track",
  remove_message_track: "Remove message track",

  make_eye_track: "Make visual track",
  remove_eye_track: "Remove visual track",

  make_ear_track: "Make audio track",
  remove_ear_track: "Remove audio track",

  make_effect_track: "Make side-effect track",
  remove_effect_track: "Remove side-effect track",

  edit_web_header: "Change web page header URL",
  invalid_web_header_url: "Invalid web page URL.\nShould be empty to remove the header,\nor an absolute URL starting with http or https.",

  create_script_thumb: "Save a thumbnail snapshot",

  check_answer: "❓ Is my solution correct?",
  wrong_answer: "😕 Not fully correct. The red blocks mark the errors. Modify your program, and try again!",
  right_answer: "🤩 Fully correct!",
  next_puzzle: "Click to continue",

  invalid_file: "😕 This cannot be processed",
  unsupported_file: "😕 This file is not supported",
  corrupted_file: "😕 This file appears to be damaged",
  missing_file: "😕 This file does not seem to exist",
  invalid_clipboard: "😕 The data in the clipboard is not supported",
  paste_not_allowed: "😕 The data in the clipboard cannot be pasted here",
  invalid_script: "😕 Invalid script text",

  split_formula: "Split the formula into two parts",
  swap_arguments: "Swap the function parameters",
  // insert_formula_before: "Insert a new formula before the active formula",
  append_formula_after: "Append a new formula after the active formula ",
  delete_formula: "Remove the highlighted part from the formula",
  append_formula_empty: "Append a new empty formula",
  append_formula_template: "Pick a template for the new formula",
  create_reference_to: "Link to another formula",
  break_reference_to: "Break the link to the formula",
  forbid_reference: "😕 You can't link to this formula",
  cyclic_reference: `😕 Linking to this formula would create an infinite loop!`,
  cyclic_reference_warning: (cycle: Let[]) => `⚠️ Linking to this formula would create an infinite loop!\n\n${cycle.map(b => b.label).join("→")}\n\n🛈 Use e.g. the 'merge' function to create loops.\n🛈 Long-press to create a reference delayed by a single update.`,

  signature: "Signature",
  synopsis: "Synopsis",
  signature_output: "output",
  signature_input: "input",
  signature_make: "make",

  move_binding_up: "Put the formula earlier in the list",
  move_binding_down: "Put the formula later in the list",
  delete_binding: "Remove the active formula",
  delete_bindings: "Remove the selected formulas",
  copy_bindings: "Copy the selected formula(s) to the clipboard",
  paste_bindings: "Paste formulas from the clipboard",
  duplicate_binding: "Duplicate the active formula",
  rename_binding: "Rename the active formula",
  group_bindings: "Group the selected formulas into a sub-program",
  ungroup_bindings: "Ungroup the formulas from the selected sub-program",
  enter_sub_program: "Navigate into sub-program",
  leave_sub_program: "Navigate out of sub-program",
  create_simple_reference: "🔗 Make a link to this formula",
  create_reference: "🔗 Make a link to this formula\n🎞️ Press long to delay the link by a single update",
  pick_instance: "Pick adjusted instances",
  filter_instances: "Filter all/present/past/future instanties",
  more_script_tools: "related...",

  enter_selection_mode: "◻ Activate multi-selection mode.\n🖥️On desktop, CTRL & SHIFT click a formula.\n👍On tablet, long-press a formula.\n",
  exit_selection_mode: "Deactivate multi-selection mode",
  work_in_progress: "work in progress!",

  shared_project_to_clipboard: "🔗 A link to your program was copied to your clipboard.\n\n🌟 Paste it anywhere you want, e.g. in an email, or on\n\n👍 Facebook, Instagram, Twitter, Discord, Skype, WhatsApp,...",
  share_project_to_clipboard: "🔗 Copy the shareable link below.\n\n🌟 Paste it anywhere you want, e.g. in an email, or on\n\n👍 Facebook, Instagram, Twitter, Discord, Skype, WhatsApp,...",

  user_registration_confirmed: "🤩 Your e-mail address is working!\n\nYou can now build whatever you want in the playground!",
  user_registration_completed: "🤩 Thanks for registering!\n\n📧 We have sent you an e-mail to activate your account.\n\n🕵 Be sure to check your spam mailbox!",
  not_signed_in: "😕 You need to be signed in to get access.\n\n↻ Reload the webpage if sign-in doesn't work.",
  tutorial_not_played_title: "Enough experience?",
  tutorial_not_played: (count: number) => `⚠️ If you are new to programming,\n🛈 it is advised to solve at least\n🧩 ${count} puzzles in the tutorial!\n\n❓ Would you like to try our puzzle game first?`,
  no_access: "😕 You don't have access to this module.\n\n💰 If you purchased the module, please first sign-out,\n↻ refresh, and then sign-in again.",
  resource_not_found: "😕 This resource doesn't exist.\n\n❓ Did you enter the correct URL in the address bar?\n\n↻ Please try again.",
  magic_requires_account: "👓 To see the math-e-magic behind this,\n\n⚠️ you need to sign-in or create a ViKiD account.",

  requires_account_title: "Account required",
  saving_requires_account: "⚠️ You need an account to save your program in the cloud.\n\n🚹 Please create one, or login to your account.",
  create_account: "Create account",

  restart_clock: "Restart clock",
  faulted_clock: "😕 Sorry, we encountered an internal error in the simulation",
  timeout_clock: (inEditor: boolean) => `⚠️ The clock stopped because your script\nwould make the user interface unresponsive\n\nTry to fix your script, and click to restart.\n\n🛠️ To increase the timeout, navigate to\n\nhttps://vikid.net/cfg?${inEditor ? "set" : "srt"}=<ms>\n\nwhere <ms> = milliseconds.`,
  start_clock: "Start clock",
  stop_clock: "Stop clock",
  step_clock: "Tick clock",
  rewind_clock: "Tick clock backwards",
  debug_clock: "Show time stamps",

  puzzle_restart: "Start over",

  toggle_syntax: "Toggle syntax",

  navigate_back: "Go to previous page",
  navigate_home: "Go to start page",

  open_menu: "Open a menu that contains more actions",

  upgrade_vikid: "😕 This program requires a newer version of ViKiD\n\nPlease load the web page and try again.",

  binding_filter: "Type to filter",

  shapes_pick: "shapes",
  shapes_paint: "colors",
  shapes_layer: "layers",
  shapes_layer_drill: "layers",
  shapes_layers: "colors & layers",
  shapes_nesting: "nested layers",
  shapes_cutting: "cutting",
  shapes_translations: "translations",
  shapes_basic_compositions: "basic compositions",
  shapes_grow: "scale, enlarge",
  shapes_shrink: "shrinking & steps",
  shapes_rotate: "rotate & animate",

  square: "square",
  circle: "circle",
  plane: "plane",
  half_plane: "half-plane",
  heart: "heart",
  droplet: "droplet",
  star: "star",
  spade: "spade",
  clover: "clover",
  rhombus: "rhombus",
  eye: "eye",
  nimbus: "rain cloud",
  lion: "lion",
  monkey: "monkey",
  flower: "flower",
  sunset: "sunset",
  blue_square: "blue square",
  red_heart: "red heart",
  orange_fish: "orange fish",
  smiley: "smiley",
  almond: "almond",
  crescent_moon: "crescent moon",
  keyhole: "keyhole",
  ball: "ball",
  padlock: "padlock",
  alien: "alien",
  envelope: "envelope",
  ghost: "spook",
  pacman: "Pac-Man",
  tennisball: "tennisball",
  sun_behind_cloud: "sun behind cloud",
  clown: "clown",
  face: "face",
  hourglass: "hourglass",
  eyes: "eyes",
  phone: "phone",
  radioactive: "radioactive",
  clock: "clock",
  cycle: "cycle",

  build_this: "Can you <b>build this blue square</b>...",
  these_values: "by using these <b>values</b>...",
  these_functions: "and these <b>functions</b>...",
  this_formula: "in this <b>formula</b>? The <b>yellow finger</b> will show you how!",

  click_square: "Click the value <b>'square'</b>...",
  // clicked_square: "The square is now <b>used in your formula</b>, and <b><S>selected</S></b>",
  click_paint: " Click the function <b>'painted'</b>...",
  explain_output: "Read the formula <i>from left to right: </i><b>square painted blue</b> ⟶ <b>blue square</b>",

  //change_selected_param: "Let us <b>change the <S>selected parameter</S></b>",
  click_color: "Click the value <b>'blue color'</b>",
  clicked_color: "The <b><S>color parameter</S></b> is now <b>blue</b>...",
  explain_blue_result: "and the <b>result</b> is now: <b><i>a square, painted blue</i></b>",
  explain_grading: "If your formula is wrong, <b>red blocks</b> will appear here.",
  explain_correct: "All correct! Click here to advance to the <b>next puzzle</b>.",

  click_to_proceed: "Click this button to <b>go to the next puzzle</b>.",
  click_grade_button: "Your <b>formula is ready</b>; click here to check it.",

  explain_tutorial: "<b>Let's show step-by-step how ViKiD works.</b><br/><br/><i>If you missed a step, use <b>this button</b> to restart.</i><br/><br/>Click anywhere to continue.",

  explain_single_use: "Each block may only <b>be used once</b>!",
  explain_restart: "If you're stuck, click here to <b>restart from scratch</b>...",
  explain_undo: "or here to <b>undo one change</b>...",
  explain_delete: "or here to <b>delete a block</b> from the formula.",
  explain_solo: "You are now ready to <b>build this puzzle yourself</b>!",

  explain_swap_args_click: "To <b>swap the parameters</b>, you can double-click on the function...",
  explain_swap_args_icon: "or you can <b>use this button</b>.",

  explain_chaining_concept: "You can <b>apply another function</b> to the result...",
  explain_chaining_selection: "<b><S>Select</S> the result</b> by clicking it...",
  explain_chaining_method: "and then <b>click on the function</b> you want to apply.",

  explain_parameter_method: "You can also <b>apply a function to a parameter</b>...",
  explain_parentheses: "The new nested formula is placed <b>inside parentheses</b>.",

  explain_delete_app: "You can also <b>delete a function application</b>...",
  explain_delete_icon: "by <b>clicking this button</b>, or using the DELETE key.",

  explain_multiple_formulas: "A <b>program</b> can consist of <b>multiple formulas!</b>",
  explain_multiple_formulas_step: "Just complete each formula, <b>one step at the time</b>.",
  explain_multiple_formulas_grade: "When you've <b>build the current formula, click here to check it</b>.",
  explain_multiple_formulas_next: "Now <b>build the next formula</b>, in the same way.",
  explain_create_ref: "To <b>refer</b> to a formula, just click on the <b>chain</b> button.",
  explain_created_ref: "Congratulations, you just made your first <b>reference</b> to a formula!",
  explain_apply_ref: "<b>Now apply a function to </b> the reference, and complete the formula.",
  explain_multiple_refs: "If <b>multiple references</b> can be made,<br/>then the <b>number below the chain</b> shows how many are left.",
  explain_fine_number_editing: "To change a number with <b>smaller steps</b>, <b>drag the center</b> of the knob.",
  explain_number_set_types: "Use these buttons to specify the <b>number set</b>.",
  explain_integer_set_type: "For example, <b>click the `integers` button</b>, and move the shape.",
  explain_toggle_literal: "To <b>reverse the sign of a number</b>, <b>double click</b> it, or use the <K>-</K> key.",

  explain_debug_toolbar: "With these buttons, you can <b>(re)start, stop and pause</b> the simulation.",

  known_issues: "Known issues",
  github: "GitHub",
  youtube: "YouTube",
  facebook: "Facebook",
  discord: "Discord",

  default_binding_label_for(method: TemplateMethodId) {
    switch (method) {
      case MethodId.MOUSE_BUTTON: return "mouse down?";
      case MethodId.MOUSE_POSITION: return "mouse position";
      case MethodId.KEY_TRACKER: return "key down?";
      case MethodId.TOUCH_POSITION: return "finger position";
      case MethodId.TOUCH_DOWN: return "finger down?";
      case MethodId.TOUCH_TRACKER: return "finger tracker";
      case MethodId.GAMEPAD_SWITCH: return "gamepad down?";
      case MethodId.GAMEPAD_VECTOR: return "gamepad stick";
      case MethodId.GAMEPAD_NUMBER: return "gamepad trigger";
      default: return assertNever(method);
    }
  }
};
