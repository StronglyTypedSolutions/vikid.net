import { MethodId, AdjusterMethodId, ReceiverMethodId } from "@vikid-core/language";
import { methodDescriptions, adjusterDescription, overloadDescription } from "locale/MethodDescription";

export const methods = methodDescriptions({
  [AdjusterMethodId.Instance]: adjusterDescription("één aangepaste instantie", "…aanpassingen"),
  [AdjusterMethodId.Population]: adjusterDescription("meerdere aangepaste instanties", "…aanpassingen", "hoeveel initieel", "hoeveel erbij", "actief?"),
  [AdjusterMethodId.Switcher]: adjusterDescription("geschakelde aangepaste instantie", "…aanpassingen", "actief?", "tijdschaal"),
  [AdjusterMethodId.Simulator]: adjusterDescription("geluste aangepaste instantie", "…aanpassingen", "actief?", "tijdstap"),

  [ReceiverMethodId.Track]: {
    _: overloadDescription("ontvang bericht", "spoor")
  },

  [MethodId.ADD]: {
    "𝕍": overloadDescription("plus", "param", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Optellen_van_vectoren"),
    _: overloadDescription("plus", "param", "https://en.wikipedia.org/wiki/Addition"),
  },
  [MethodId.SUB]: {
    "ℝ": overloadDescription("min", "aantal", "https://wikikids.nl/Aftrekken"),
    "𝕍": overloadDescription("min", "param", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Verschil_van_vectoren"),
  },
  [MethodId.MUL]: {
    "ℝ": overloadDescription("maal", "factor", "https://wikikids.nl/Vermenigvuldigen"),
    "𝕍": overloadDescription("maal", "factor", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
    "𝕋": overloadDescription("samengesteld met", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie"),
  },
  [MethodId.DIV]: {
    "ℝ": overloadDescription("gedeeld door", "noemer", "https://wikikids.nl/Delen"),
    "𝕍": overloadDescription("gedeeld door", "factor", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
  },
  [MethodId.NEG]: {
    "ℝ": overloadDescription("tegengesteld", "https://wikikids.nl/Negatief_getal#Tegengestelde"),
    "𝕍": overloadDescription("tegengesteld", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Vermenigvuldiging_van_een_vector_met_een_scalair"),
  },
  [MethodId.INVERT]: {
    "ℝ": overloadDescription("inverse", "https://nl.wikipedia.org/wiki/Inverse#Inverse_van_een_getal_of_variabele"),
    "𝕋": overloadDescription("inverse", "https://nl.wikipedia.org/wiki/Inverse#Inverse_transformatie"),
    "𝕂": overloadDescription("inverse", "https://nl.wikipedia.org/wiki/Complementaire_kleur"),
    "𝔾": overloadDescription("inverse", "https://nl.wikipedia.org/wiki/Complement_(verzamelingenleer)"),
  },
  [MethodId.MOD]: {
    _: overloadDescription("positieve rest", "noemer", "https://nl.wikipedia.org/wiki/Rest")
  },
  [MethodId.SIN]: {
    _: overloadDescription("sinus", "https://nl.wikipedia.org/wiki/Sinus_en_cosinus")
  },
  [MethodId.COS]: {
    _: overloadDescription("cosinus", "https://nl.wikipedia.org/wiki/Sinus_en_cosinus")
  },
  [MethodId.TAN]: {
    _: overloadDescription("tangens", "https://nl.wikipedia.org/wiki/Tangens_en_cotangens")
  },
  [MethodId.ASIN]: {
    _: overloadDescription("arcsinus", "https://nl.wikipedia.org/wiki/Arcsinus")
  },
  [MethodId.ACOS]: {
    _: overloadDescription("arccosinus", "https://nl.wikipedia.org/wiki/Arccosinus")
  },
  [MethodId.ATAN2]: {
    _: overloadDescription("arctangens", "x", "https://nl.wikipedia.org/wiki/Arctangens#De_functie_Arctan2")
  },
  [MethodId.ASIN]: {
    _: overloadDescription("boogsinus", "https://nl.wikipedia.org/wiki/Arcsinus")
  },
  [MethodId.ACOS]: {
    _: overloadDescription("boogcosinus", "https://nl.wikipedia.org/wiki/Arccosinus")
  },
  [MethodId.ABS]: {
    "ℝ": overloadDescription("absolute waarde", "https://wikikids.nl/Absolute_waarde"),
    "𝕍": overloadDescription("lengte", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Norm_van_een_vector"),
  },
  [MethodId.EXP]: {
    _: overloadDescription("exponentiële functie", "https://nl.wikipedia.org/wiki/Exponenti%C3%ABle_functie")
  },
  [MethodId.LOG]: {
    _: overloadDescription("natuurlijk logaritme", "https://nl.wikipedia.org/wiki/Natuurlijke_logaritme")
  },
  [MethodId.POW]: {
    _: overloadDescription("tot de macht", "getal", "https://wikikids.nl/Machtsverheffing")
  },
  [MethodId.RANDOM_NUMBER]: {
    _: overloadDescription("willekeurig getal", "van", "tot")
  },
  [MethodId.PSEUDO_RANDOM_NUMBER]: {
    _: overloadDescription("willekeurige getal met seed", "van", "tot", "seed")
  },
  [MethodId.FLOOR]: {
    _: overloadDescription("afgerond naar beneden", "https://wikikids.nl/Afronden")
  },
  [MethodId.CEIL]: {
    _: overloadDescription("afgerond naar boven", "https://wikikids.nl/Afronden")
  },
  [MethodId.ROUND]: {
    _: overloadDescription("afgerond", "https://wikikids.nl/Afronden")
  },
  [MethodId.MIN]: {
    _: overloadDescription("kleinste", "getal", "https://nl.wikipedia.org/wiki/Totale_orde#Minimum_en_maximum")
  },
  [MethodId.MAX]: {
    _: overloadDescription("grootste", "getal", "https://nl.wikipedia.org/wiki/Totale_orde#Minimum_en_maximum")
  },
  [MethodId.LERP]: {
    _: overloadDescription("interpoleer naar", "einde", "factor", "https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support")
  },
  [MethodId.SIGN]: {
    _: overloadDescription("toestandsteken")
  },
  [MethodId.SQRT]: {
    _: overloadDescription("vierkantswortel", "https://nl.wikipedia.org/wiki/vierkantswortel")
  },

  /** Boolean operators */
  [MethodId.EQU]: {
    _: overloadDescription("is gelijk aan", "param", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)")
  },
  [MethodId.NEQ]: {
    _: overloadDescription("is niet gelijk aan", "param", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)")
  },
  [MethodId.GT]: {
    _: overloadDescription("is groter dan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)")
  },
  [MethodId.GTE]: {
    _: overloadDescription("is groter of gelijk aan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)")
  },
  [MethodId.LT]: {
    _: overloadDescription("is kleiner dan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)")
  },
  [MethodId.LTE]: {
    _: overloadDescription("is kleiner of gelijk aan", "getal", "https://nl.wikipedia.org/wiki/Ongelijkheid_(wiskunde)")
  },
  [MethodId.AND]: {
    "𝔹": overloadDescription("en", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#AND"),
    "ℝ": overloadDescription("bitwise AND", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#AND"),
  },
  [MethodId.OR]: {
    "𝔹": overloadDescription("of", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#OR"),
    "ℝ": overloadDescription("bitwise OR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#OR"),
  },
  [MethodId.XOR]: {
    "𝔹": overloadDescription("exclusieve of", "boolean", "https://nl.wikipedia.org/wiki/Booleaanse_operator#XOR_(%22eXclusive_OR%22)"),
    "ℝ": overloadDescription("bitwise XOR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"),
  },
  [MethodId.NOT]: {
    "𝔹": overloadDescription("niet", "https://nl.wikipedia.org/wiki/Booleaanse_operator#NOT"),
    "ℝ": overloadDescription("bitwise NOT", "https://en.wikipedia.org/wiki/Bitwise_operation#NOT"),
  },

  [MethodId.EQU_EMPTY_SHAPE]: {
    _: overloadDescription("is bij benadering leeg?")
  },

  /* Conditional operators **/
  [MethodId.ITE]: {
    _: overloadDescription("als", "boolean", "anders", "https://en.wikipedia.org/wiki/%3F:#Python")
  },

  /** Stateful operators */
  [MethodId.INTEGRAL]: {
    _: overloadDescription("plus integraal over tijd", "snelheid", "https://nl.wikipedia.org/wiki/Kinematica#Integralen")
  },
  [MethodId.DERIVATIVE]: {
    _: overloadDescription("afgeleide naar tijd", "active?", "https://nl.wikipedia.org/wiki/Kinematica#Snelheid")
  },
  [MethodId.CLAMPED_INTEGRAL]: {
    _: overloadDescription("plus integraal over tijd, begrensd", "minimum", "maximum", "snelheid", "https://nl.wikipedia.org/wiki/Kinematica#Integralen")
  },

  /** Event operators */
  [MethodId.WHEN]: {
    _: overloadDescription("wanneer", "trigger", "http://reactivex.io/documentation/operators/sample.html")
  },
  [MethodId.TIMER]: {
    _: overloadDescription("na", "seconden", "herhalen?", "onmiddelijk?", "http://reactivex.io/documentation/operators/timer.html")
  },
  [MethodId.RISING]: {
    _: overloadDescription("aantal stijgende flanken", "https://nl.wikipedia.org/wiki/Flank_(elektrisch)")
  },
  [MethodId.CALM]: {
    _: overloadDescription("stop updates met dezelfde waarde", "ondiep?", "https://rxmarbles.com/#distinctUntilChanged")
  },
  [MethodId.TAKE]: {
    _: overloadDescription("neem enkel eerste updates", "aantal", "http://reactivex.io/documentation/operators/take.html")
  },
  [MethodId.SKIP]: {
    _: overloadDescription("sla eerste updates over", "aantal", "http://reactivex.io/documentation/operators/skip.html")
  },
  [MethodId.BUFFER]: {
    _: overloadDescription("buffer updates", "aantal", "vertraagd?", "actief?", "http://reactivex.io/documentation/operators/buffer.html")
  },
  [MethodId.RECENT]: {
    _: overloadDescription("recente updates", "tijdspanne [@<0 ⇒ tijdstempels | @>0 ⇒ seconden]", "vertraagd?", "glijdend?", "actief?", "http://reactivex.io/documentation/operators/buffer.html")
  },
  [MethodId.FILTER]: {
    _: overloadDescription("filter updates", "doorlaten?", "http://reactivex.io/documentation/operators/filter.html")
  },
  [MethodId.SNAPSHOT]: {
    _: overloadDescription("bij update, neem", "bron", "http://reactivex.io/documentation/operators/sample.html")
  },
  [MethodId.ASAP]: {
    _: overloadDescription("zo snel mogelijk", "maximum intra-frame updates")
  },
  [MethodId.MERGE]: {
    _: overloadDescription("gecombineerd met", "param", "http://reactivex.io/documentation/operators/merge.html")
  },
  [MethodId.MERGE_LEFT]: {
    _: overloadDescription("links gecombineerd met", "param", "http://reactivex.io/documentation/operators/merge.html")
  },
  [MethodId.MERGE_BOTH]: {
    _: overloadDescription("gecombineerd met", "simultaan", "param", "http://reactivex.io/documentation/operators/merge.html")
  },
  [MethodId.VSYNC]: {
    _: overloadDescription("zodra getoond op het scherm", "active?")
  },

  /** Transformation operators */
  [MethodId.TRANSLATE_V]: {
    _: overloadDescription("verschoven", "param", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)")
  },
  [MethodId.TRANSLATE_X]: {
    _: overloadDescription("verschoven", "horizontaal", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)")
  },
  [MethodId.TRANSLATE_Y]: {
    _: overloadDescription("verschoven", "verticaal", "https://nl.wikipedia.org/wiki/Translatie_(meetkunde)")
  },
  [MethodId.ROTATE]: {
    _: overloadDescription("gedraaid", "uren", "https://nl.wikipedia.org/wiki/Rotatie_(meetkunde)")
  },
  [MethodId.SCALE]: {
    _: overloadDescription("geschaald", "factor", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)")
  },
  [MethodId.SCALE_V]: {
    _: overloadDescription("geschaald", "factoren", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)")
  },
  [MethodId.SCALE_X]: {
    _: overloadDescription("geschaald", "horizontaal", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)")
  },
  [MethodId.SCALE_Y]: {
    _: overloadDescription("geschaald", "verticaal", "https://nl.wikipedia.org/wiki/Verschalen_(meetkunde)")
  },
  [MethodId.PIXEL_SNAP]: {
    _: overloadDescription("uitgelijnd op pixels", "origin?", "x axis?", "y axis?", "https://en.wikipedia.org/wiki/Snap_(computer_graphics)")
  },

  /** Graphics operators */
  [MethodId.PAINT_SOLID]: {
    _: overloadDescription("geverfd in", "kleur")
  },
  [MethodId.PAINT_LINEAR]: {
    _: overloadDescription("geverfd in", "start kleur", "eind kleur", "start punt", "eind punt")
  },
  [MethodId.OVER]: {
    "[𝔾]": overloadDescription("op elkaar gestapeld"),
    _: overloadDescription("over", "vorm"),
  },
  [MethodId.UNDER]: {
    "[𝔾]": overloadDescription("onder elkaar gestapeld"),
    _: overloadDescription("onder", "vorm"),
  },
  [MethodId.INTERSECTION]: {
    _: overloadDescription("doorsnede met", "vorm", "https://nl.wikipedia.org/wiki/Doorsnede_(verzamelingenleer)")
  },
  [MethodId.EXCLUSION]: {
    _: overloadDescription("uitgesneden met", "vorm", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)#Relatief_complement")
  },
  [MethodId.PLOT_GRAPH]: {
    _: overloadDescription("grafiek over tijd", "dikte", "afwijking", "maximum #points [@<0 ⇒ ∞)", "https://nl.wikipedia.org/wiki/Grafiek_(wiskunde]")
  },
  [MethodId.CLONE]: {
    _: overloadDescription("gekopieerd", "aantal", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie")
  },
  [MethodId.TRANSFORM]: {
    _: overloadDescription("getransformeerd met", "transformatie", "https://nl.wikipedia.org/wiki/Affiene_transformatie")
  },
  [MethodId.PLOT_POINTS]: {
    _: overloadDescription("updates over tijd", "dikte", "afwijking", "maximum #points [@<0 ⇒ ∞)", "https://nl.wikipedia.org/wiki/Grafiek_(wiskunde]")
  },
  [MethodId.TRANSPARENTIZE]: {
    _: overloadDescription("doorschijnend", "factor", "https://nl.wikipedia.org/wiki/Alfakanaal")
  },
  [MethodId.FILLED]: {
    "𝕍": overloadDescription("als vorm", "dikte"),
    "𝕊": overloadDescription("als vorm", "horizontale tekstuitlijning", "verticale tekstuitlijning", "regelafstand"),
    _: overloadDescription("als vorm", "kleur"),
  },
  [MethodId.CONTAINS_POINT]: {
    _: overloadDescription("bevat punt?", "punt")
  },
  [MethodId.RENDER]: {
    _: overloadDescription("render als bitmap", "breedte [pixels]", "hoogte [pixels]", "geïnterpoleerd?")
  },
  [MethodId.COMPOSE]: {
    _: overloadDescription("compositie", "operator", "voorgrond", "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation")
  },

  /** Vector operators */
  [MethodId.HOR]:
  {
    "𝕋": overloadDescription("rode basis vector", "https://nl.wikipedia.org/wiki/Basis_(lineaire_algebra)"),
    _: overloadDescription("horizontale coördinaat", "https://nl.wikipedia.org/wiki/Co%C3%B6rdinaat"),
  },
  [MethodId.VER]: {
    "𝕋": overloadDescription("groene basis vector", "https://nl.wikipedia.org/wiki/Basis_(lineaire_algebra)"),
    _: overloadDescription("verticale coördinaat", "https://nl.wikipedia.org/wiki/Co%C3%B6rdinaat"),
  },
  [MethodId.WEIGHT]: {
    _: overloadDescription("w coördinaat", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/")
  },
  [MethodId.ORIG]: {
    "𝕋": overloadDescription("gele oorsprong", "https://nl.wikipedia.org/wiki/Oorsprong_(wiskunde)"),
  },
  [MethodId.POST_TRANSFORMS]: {
    _: overloadDescription("transformaties na gelabelde vorm", "https://en.wikipedia.org/wiki/Graphics_pipeline#The_World_Coordinate_System")
  },

  [MethodId.DOT]: {
    _: overloadDescription("inwendig product met", "param", "https://nl.wikipedia.org/wiki/Inwendig_product")
  },
  [MethodId.DET]: {
    _: overloadDescription("determinant met", "param", "https://nl.wikipedia.org/wiki/Determinant")
  },
  [MethodId.REFLECT]: {
    _: overloadDescription("gespiegeld om", "richting", "https://nl.wikipedia.org/wiki/Spiegeling_(meetkunde)")
  },
  [MethodId.ANGLE]: {
    _: overloadDescription("angle between", "param", "radians?", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)#Inwendig_product")
  },
  [MethodId.TOWARDS]: {
    _: overloadDescription("in de richting van", "param")
  },
  [MethodId.CARTESIAN]: {
    _: overloadDescription("to Euclidean point or vector", "https://nl.wikipedia.org/wiki/Projectieve_ruimte")
  },
  [MethodId.NORMALIZE]: {
    _: overloadDescription("normalized", "https://en.wikipedia.org/wiki/Unit_vector")
  },
  [MethodId.CROSS]: {
    _: overloadDescription("3D uitwendig product met", "param", "https://nl.wikipedia.org/wiki/Kruisproduct")
  },

  [MethodId.BOUNDING_POINT]: {
    _: overloadDescription("punt in AABB", "Barycentrische coördinaten", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box")
  },
  [MethodId.BOUNDING_WIDTH]: {
    _: overloadDescription("breedte van AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box")
  },
  [MethodId.BOUNDING_HEIGHT]: {
    _: overloadDescription("hoogte van AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box")
  },

  [MethodId.HIT_TEST]: {
    _: overloadDescription("raakt?", "met label", "zonder label", "actief?", "maximum diepte")
  },
  [MethodId.RAY_CAST]: {
    _: overloadDescription("aangeraakt", "data type", "met label", "zonder label", "actief?")
  },
  [MethodId.HIT_REGION]: {
    _: overloadDescription("aanraakbaar", "label", "param")
  },

  [MethodId.CULL]: {
    _: overloadDescription("cull", "active?", "https://en.wikipedia.org/wiki/Hidden-surface_determination#Viewing-frustum_culling")
  },

  // [MethodId.PROJECT]: "",
  // [MethodId.REJECT]: "",

  /** Puzzle methods */
  [MethodId.EXTRA]: {
    _: overloadDescription("extra", "param")
  },
  [MethodId.PUZZLE]: {
    _: overloadDescription("puzzle", "soort [@=0 ⇒ vaste blokken, @1 ⇒ vrij instellen]")
  },
  [MethodId.OUTLINE]: {
    _: overloadDescription("outline", "dikte [@≤0 => verborgen]", "kleur")
  },
  [MethodId.CORRECT]: {
    _: overloadDescription("corrigeer", "toon?", "foute waarde")
  },
  [MethodId.PREMADE]: {
    _: overloadDescription("voorgemaakt", "sla over?")
  },
  [MethodId.SELECT]: {
    _: overloadDescription("geselecteerd", "functie?")
  },
  [MethodId.IGNORE]: {
    _: overloadDescription("genegeerd")
  },
  [MethodId.CYCLIC]: {
    _: overloadDescription("animatie cyclus", "duurtijd")
  },
  [MethodId.FEEDBACK]: {
    _: overloadDescription("feedback", "toon?", "initiële waarde", "recursieve verwijzing")
  },
  [MethodId.ACTUATOR]: {
    _: overloadDescription("actuator", "welke [@=0 ⇒ uit | @=1 ⇒ oog | @=oor]", "actuator verwijzing")
  },

  /** Drawing methods */
  [MethodId.MOVE_TO]: {
    _: overloadDescription("beweeg naar", "start punt", "https://www.w3schools.com/tags/canvas_moveto.asp")
  },
  [MethodId.LINE_TO]: {
    _: overloadDescription("teken lijn naar", "eind punt", "https://www.w3schools.com/tags/canvas_lineto.asp")
  },
  [MethodId.QUAD_TO]: {
    _: overloadDescription("teken kwadratische curve naar", "eind punt", "controlepunt", "https://www.w3schools.com/tags/canvas_quadraticcurveto.asp")
  },
  [MethodId.CUBIC_TO]: {
    _: overloadDescription("teken kubische curve naar", "eind punt", "eerste controlepunt", "tweede controlepunt", "https://www.w3schools.com/tags/canvas_beziercurveto.asp")
  },
  [MethodId.LAST_POINT]: {
    _: overloadDescription("eindpunt")
  },
  // [MethodId.ARC_TO]: {
  //   _: overloadDescription("teken cirkelboog naar", "start richting", "eind punt", "straal", "https://www.w3schools.com/tags/canvas_arcto.asp")
  // },
  [MethodId.GET_POINTS]: {
    _: overloadDescription("lijst van punten", "enkel hoekpunten?")
  },

  [MethodId.STROKE]: {
    "𝔽": overloadDescription("getekend", "kleur", "dikte", "ronde hoeken?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
    _: overloadDescription("getekend", "kleur", "dikte", "gesloten?", "ronde hoeken?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
  },

  /** Factory methods */
  // [MethodId.NEW_BINDING]: "",
  [MethodId.VECTOR_2D]: {
    "ℝ²": overloadDescription("https://nl.wikipedia.org/wiki/Vector_(wiskunde)"),
    _: overloadDescription("param", "x coördinaat", "y coördinaat", "https://nl.wikipedia.org/wiki/Vector_(wiskunde)")
  },
  [MethodId.POINT_2D]: {
    "ℝ²": overloadDescription("https://nl.wikipedia.org/wiki/Punt_(wiskunde)"),
    _: overloadDescription("point", "x coördinaat", "y coördinaat", "https://nl.wikipedia.org/wiki/Punt_(wiskunde)")
  },
  [MethodId.HOMOGENEOUS_2D]: {
    "ℝ³": overloadDescription("https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
    _: overloadDescription("punt of vector", "x coördinaat", "y coördinaat", "w coördinaat", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/")
  },
  [MethodId.MATRIX_2D]: {
    "𝕍³": overloadDescription("https://nl.wikipedia.org/wiki/Affiene_transformatie"),
    _: overloadDescription("transformatie", "x richting", "y richting", "oorsprong", "https://nl.wikipedia.org/wiki/Affiene_transformatie")
  },
  [MethodId.COLOR_RGB]: {
    "ℝ³": overloadDescription("https://nl.wikipedia.org/wiki/RGB-kleursysteem"),
    _: overloadDescription("kleur", "rood", "groen", "blauw", "https://nl.wikipedia.org/wiki/RGB-kleursysteem")
  },
  [MethodId.COLOR_HSL]: {
    _: overloadDescription("kleur", "tint", "verzadiging", "helderheid", "perceptueel?", "https://nl.wikipedia.org/wiki/HSL_(kleurruimte)")
  },
  [MethodId.FIGURE_NGON]: {
    _: overloadDescription("regelmatige veelhoek", "aantal hoeken", "straal", "middelpunt", "https://nl.wikipedia.org/wiki/Regelmatige_veelhoek")
  },
  [MethodId.GAMEPAD_SWITCH]: {
    _: overloadDescription("gamepad schakelaar", "welke schakelaar", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout")
  },
  [MethodId.GAMEPAD_NUMBER]: {
    _: overloadDescription("gamepad drukknop", "welke drukknop", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout")
  },
  [MethodId.GAMEPAD_VECTOR]: {
    _: overloadDescription("gamepad richting", "welke richting", "welke gamepad", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout")
  },
  [MethodId.FIGURE_LINE]: {
    _: overloadDescription("lijnstuk", "startpunt", "endpunt", "https://nl.wikipedia.org/wiki/Lijnstuk")
  },
  [MethodId.FIGURE_RECT]: {
    _: overloadDescription("rechthoek", "breedte", "hoogte", "afgeronden hoeken", "middelpunt", "https://nl.wikipedia.org/wiki/Rechthoek")
  },
  [MethodId.FIGURE_CIRCLE]: {
    _: overloadDescription("cirkel", "straal", "middelpunt", "https://nl.wikipedia.org/wiki/Cirkel")
  },
  [MethodId.FIGURE_ELLIPSE]: {
    _: overloadDescription("ellips", "breedte", "hoogte", "middelpunt", "rotatie", "starthoek", "eindhoek", "wijzerzin?", "gesloten?", "https://nl.wikipedia.org/wiki/Ellips_(wiskunde)")
  },
  [MethodId.FIGURE_ARC]: {
    _: overloadDescription("boog", "straal", "middelpunt", "starthoek", "eindhoek", "wijzerzin?", "gesloten?", "https://nl.wikipedia.org/wiki/Boog_(meetkunde)")
  },
  [MethodId.DRAWING_PATH]: {
    _: overloadDescription("lijntekening", "startpunt", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths")
  },
  [MethodId.BITMAP_IMAGE]: {
    _: overloadDescription("externe sprite", "URI", "geïnterpoleerd?", "hoogte", "https://nl.wikipedia.org/wiki/Sprite_(computer)")
  },
  [MethodId.EMPTY_LIST]: {
    _: overloadDescription("lege rij", "type", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.NUMERIC_RANGE]: {
    _: overloadDescription("getallenrij", "start", "stap", "aantal", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.MOUSE_BUTTON]: {
    _: overloadDescription("muis knop tracker", "welke knop [@=0 ⇒ eender]", "ook aanraakscherm?")
  },
  [MethodId.MOUSE_POSITION]: {
    _: overloadDescription("muis positie tracker", "ook zwevend?", "ook aanraakscherm?")
  },
  [MethodId.TOUCH_TRACKER]: {
    _: overloadDescription("multi-touch tracker")
  },
  [MethodId.TOUCH_DOWN]: {
    _: overloadDescription("touch down tracker", "welke touch")
  },
  [MethodId.TOUCH_POSITION]: {
    _: overloadDescription("touch positie tracker", "welke touch")
  },
  [MethodId.KEY_TRACKER]: {
    _: overloadDescription("toetsenbord aanslag tracker [enkel in volledige scherm modus]", "code", "debug", "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#try_it_out")
  },
  [MethodId.UNIQUE_ID]: {
    _: overloadDescription("unieke code")
  },
  [MethodId.SOUND_STREAM]: {
    _: overloadDescription("gestreamd geluids bestand", "getal of URI")
  },
  [MethodId.SOUND_BUFFER]: {
    _: overloadDescription("gebufferd geluids bestand", "getal of URI")
  },
  [MethodId.PIXELS_PER_UNIT]: {
    _: overloadDescription("screen pixels per ViKiD unit")
  },
  // [MethodId.NEW_MICROPHONE]: {
  //   _: overloadDescription("microfoon geluidsbron")
  // },
  [MethodId.EMPTY_SET]: {
    _: overloadDescription("lege verzameling", "type", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)")
  },
  [MethodId.EMPTY_MAP]: {
    _: overloadDescription("lege map [associatieve array]", "type sleutel", "type waarde", "https://nl.wikipedia.org/wiki/Associatieve_array")
  },

  /** List methods */
  [MethodId.APPEND]: {
    _: overloadDescription("toegevoegd", "element", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.INSERT]: {
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescription("ingevoegd", "verzameling", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)"),
    _: overloadDescription("ingevoegd", "index of indices", "element(en)", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.CONCAT]: {
    _: overloadDescription("samengevoegd", "elementen", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.SLICE]: {
    _: overloadDescription("uitgesneden", "index", "aantal", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.REMOVE]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescription("verwijder", "sleutel", "https://nl.wikipedia.org/wiki/Associatieve_array"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescription("verwijder", "sleutel", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)"),
    _: overloadDescription("verwijder", "index", "count", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.LENGTH]: {
    _: overloadDescription("aantal elementen", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.ITEM]: {
    _: overloadDescription("neem element(en)", "index of indices of condities", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.SEARCH]: {
    _: overloadDescription("indices van", "element(en)", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.CONTAINS]: {
    _: overloadDescription("bevat", "element(en)", "https://nl.wikipedia.org/wiki/Element_(wiskunde)")
  },
  [MethodId.REPLACE]: {
    _: overloadDescription("vervang element", "index", "element", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.REVERSE]: {
    _: overloadDescription("omgekeerd", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.SUM]: {
    _: overloadDescription("sommatie", "nul als leeg?", "https://nl.wikipedia.org/wiki/Sommatie")
  },
  [MethodId.PRODUCT]: {
    _: overloadDescription("product", "één als leeg?", "https://nl.wikipedia.org/wiki/Vermenigvuldigen#Notatie_en_terminologie")
  },
  [MethodId.FLATTEN]: {
    _: overloadDescription("afgevlakt", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat")
  },
  // [MethodId.TRIM]: {
  // _: overloadDescription("trim elementen", "welke [@>0 ⇒ met stamp=@ | @≤0 ⇒ zonder stamp=-@]", "update als leeg?")
  // },
  [MethodId.FILL]: {
    _: overloadDescription("gevuld met", "param", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.ORDER]: {
    _: overloadDescription("indices van geordende elementen", "aflopend?")
  },
  [MethodId.REPEAT]: {
    _: overloadDescription("herhaald als lijst", "aantal", "https://nl.wikipedia.org/wiki/Array")
  },
  [MethodId.TO_DRAWING]: {
    "[[𝕍]]": overloadDescription("als lijntekening", "startpunt", "losse segmenten?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
    "[𝕍]": overloadDescription("als lijntekening", "gesloten?", "startpunt", "losse segmenten?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
  },
  [MethodId.TO_SET]: {
    _: overloadDescription("als verzameling", "https://nl.wikipedia.org/wiki/Verzameling_(wiskunde)")
  },
  [MethodId.TO_MAP]: {
    _: overloadDescription("als map [associatieve array]", "https://nl.wikipedia.org/wiki/Associatieve_array")
  },
  [MethodId.TRANSPOSE]: {
    _: overloadDescription("getransponeerd", "https://nl.wikipedia.org/wiki/Getransponeerde_matrix")
  },

  [MethodId.PRINT]: {
    "𝔹": overloadDescription("als tekst"),
    "𝕂": overloadDescription("als tekst"),
    "𝕍": overloadDescription("als tekst", "cijfers na de komma"),
    "𝕋": overloadDescription("als tekst", "cijfers na de komma"),
    "ℝ": overloadDescription("als tekst", "cijfers na de komma"),
  },

  [MethodId.CASE]: {
    _: overloadDescription("letters", "mode [@<0 ⇒ kleine letters | @>0 ⇒ hoofdletters]", "https://nl.wikipedia.org/wiki/Onderkast")
  },
  [MethodId.JOIN]: {
    _: overloadDescription("samengevoegd", "scheidingsteken")
  },
  [MethodId.FORMAT]: {
    _: overloadDescription("formatteer naar tekst", "formaat", "indentatie")
  },
  [MethodId.PARSE]: {
    _: overloadDescription("ontleed tekst", "formaat", "type")
  },
  [MethodId.PROMPT]: {
    _: overloadDescription("vraag de gebruiker om tekst in te voeren", "standaard invoer", "open!")
  },
  [MethodId.ALERT]: {
    _: overloadDescription("waarschuw de gebruiker", "open!")
  },
  [MethodId.CONFIRM]: {
    _: overloadDescription("vraag de gebruiker om te bevestigen", "open!")
  },
  [MethodId.BROWSE]: {
    _: overloadDescription("open als HTML pagina in de browser", "open!")
  },

  [MethodId.PAD]: {
    _: overloadDescription("opgevuld met", "param", "lengte", "achteraan?")
  },

  [MethodId.INDEX]: {
    _: overloadDescription("instantie index", "welke [@=0 ⇒ serie_nummer | @=1 ⇒ lot_index  | @=2 ⇒ instantie_id]")
  },

  [MethodId.GET_STAMP]: {
    _: overloadDescription("vraag tijdstempel op")
  },
  [MethodId.SET_STAMP]: {
    _: overloadDescription("wijzig tijdstempel", "nieuwe tijdstempel")
  },

  [MethodId.PLAY_SOUND]: {
    _: overloadDescription("speel geluid", "aan?", "tempo")
  },
  [MethodId.SET_VOLUME]: {
    _: overloadDescription("met volume", "param")
  },
  // [MethodId.ANALYSE_AUDIO]: {
  //   _: overloadDescription("speel en analyseer geluid", "Fast Fourier Transform size", "minimum Decibels", "maximum Decibels", "smoothing time constant", "actief?", "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode")
  // },
  [MethodId.LOOP_SOUND]: {
    "💥": overloadDescription("loop geluid", "actief?", "starttijd", "duurtijd", "https://nl.wikipedia.org/wiki/Loop_(geluid)"),
    "🎶": overloadDescription("loop geluid", "actief?", "https://nl.wikipedia.org/wiki/Loop_(geluid)"),
  },
  [MethodId.SLICE_SOUND]: {
    _: overloadDescription("uitgesneden geluid", "starttijd", "duurtijd")
  },
  [MethodId.IS_PLAYING]: {
    _: overloadDescription("wordt afgespeeld?")
  },
  [MethodId.ADD_AUDIO]: {
    _: overloadDescription("plus", "audio")
  },
  [MethodId.SUM_AUDIO]: {
    _: overloadDescription("som")
  },

  [MethodId.LOCAL_STORAGE]: {
    _: overloadDescription("bij update, sla op", "sleutel", "laad!", "actief?")
  },
  [MethodId.DEBUG_PRINT]: {
    _: overloadDescription("print naar debug console", "prefix", "actief?")
  },
  [MethodId.DEBUG_PAUSE]: {
    _: overloadDescription("bij update, pauzeer de klok", "update", "actief?")
  },
  [MethodId.DEBUG_PAUSE]: {
    _: overloadDescription("breakpoint", "actief?")
  },

  [MethodId.SATELLITE]: {
    _: overloadDescription("satelliet", "type")
  },
  [MethodId.SEND]: {
    _: overloadDescription("verstuur", "bericht", "aantal")
  },
  [MethodId.RECEIVE]: {
    _: overloadDescription("ontvang berichten", "leeg?", "asap")
  },

  [MethodId.TUPLE_2]: {
    "𝕍": overloadDescription("https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
    _: overloadDescription("koppel", "element 0", "element 1", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.TUPLE_3]: {
    "𝕋": overloadDescription("https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
    "𝕂": overloadDescription("https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
    "𝕍": overloadDescription("https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
    _: overloadDescription("tripel", "element 0", "element 1", "element 2", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.TUPLE_4]: {
    _: overloadDescription("quadrupel", "element 0", "element 1", "element 2", "element 3", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },

  [MethodId.GET_ELEMENT_0]: {
    _: overloadDescription("neem element 0", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.GET_ELEMENT_1]: {
    _: overloadDescription("neem element 1", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.GET_ELEMENT_2]: {
    _: overloadDescription("neem element 2", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.GET_ELEMENT_3]: {
    _: overloadDescription("neem element 3", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },

  [MethodId.TO_LIST]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescription("neem alle elementen", "sortering"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescription("neem alle elementen", "sortering"),
    _: overloadDescription("neem alle elementen", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)"),
  },

  [MethodId.WITH_ELEMENT_0]: {
    _: overloadDescription("vervang element 0", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.WITH_ELEMENT_1]: {
    _: overloadDescription("vervang element 1", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.WITH_ELEMENT_2]: {
    _: overloadDescription("vervang element 2", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },
  [MethodId.WITH_ELEMENT_3]: {
    _: overloadDescription("vervang element 3", "nieuw element", "https://nl.wikipedia.org/wiki/Koppel_(wiskunde)")
  },

  [MethodId.SET_UNION]: {
    _: overloadDescription("unie met", "verzameling", "https://nl.wikipedia.org/wiki/Vereniging_(verzamelingenleer)")
  },
  [MethodId.SET_INTERSECTION]: {
    _: overloadDescription("doorsnede met", "verzameling", "https://nl.wikipedia.org/wiki/Doorsnede_(verzamelingenleer)")
  },
  [MethodId.SET_DIFFERENCE]: {
    _: overloadDescription("verschil met", "verzameling", "https://nl.wikipedia.org/wiki/Complement_(verzamelingenleer)")
  },
  [MethodId.SET_SYMMETRIC_DIFFERENCE]: {
    _: overloadDescription("symmetrisch verschil met", "verzameling", "https://nl.wikipedia.org/wiki/Symmetrisch_verschil")
  },

  [MethodId.DYN_FROM]: {
    _: overloadDescription("als dynamische waarde", "https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information")
  },
  [MethodId.DYN_IS]: {
    _: overloadDescription("is van type", "type", "https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information")
  },
  [MethodId.DYN_AS]: {
    _: overloadDescription("als waarde van type", "type", "https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information")
  },

  [MethodId.TASK_RESULT]: {
    _: overloadDescription("resultaat van de taak")
  },

  [MethodId.TASK_FIRE]: {
    _: overloadDescription("volgende taak", "waarde")
  },
});
