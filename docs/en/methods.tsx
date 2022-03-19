import { MethodId, AdjusterMethodId, ReceiverMethodId } from "language";
import { methodDescriptions, adjusterDescription, overloadDescription } from "locale/MethodDescription";

/**
 * NOTE: We assume the overload description are sorted from specific to generic!
 * So always add _: overloadDescription(...) as the last one,
 * and exact matches like "𝕍": overloadDescription(...) first.
 */
export const methods = methodDescriptions({
  [AdjusterMethodId.Instance]: adjusterDescription("one adjusted instance", "…adjustments"),
  [AdjusterMethodId.Population]: adjusterDescription("multiple adjusted instances", "…adjustments", "initial amount", "spawn amount", "active?"),
  [AdjusterMethodId.Switcher]: adjusterDescription("switched adjusted instance", "…adjustments", "active?", "time scale"),
  [AdjusterMethodId.Simulator]: adjusterDescription("looping adjusted instance", "…adjustments", "active?", "time step"),

  [ReceiverMethodId.Track]: {
    _: overloadDescription("receive message", "track")
  },

  [ReceiverMethodId.Deref]: {
    _: overloadDescription("signal pointer switcher", "asap")
  },

  [MethodId.ADD]: {
    "𝕍": overloadDescription("plus", "param", "https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction"),
    _: overloadDescription("plus", "param", "https://en.wikipedia.org/wiki/Addition"),
  },
  [MethodId.SUB]: {
    "𝕍": overloadDescription("minus", "param", "https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction"),
    _: overloadDescription("minus", "param", "https://en.wikipedia.org/wiki/Subtraction"),
  },
  [MethodId.MUL]: {
    "ℝ": overloadDescription("times", "factor", "https://en.wikipedia.org/wiki/Multiplication"),
    "𝕍": overloadDescription("times", "factor", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
    "𝕋": overloadDescription("combined with", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation"),
  },
  [MethodId.DIV]: {
    "ℝ": overloadDescription("divided by", "divisor", "https://en.wikipedia.org/wiki/Division_(mathematics)"),
    "𝕍": overloadDescription("divided by", "factor", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
  },
  [MethodId.NEG]: {
    "ℝ": overloadDescription("negation", "https://en.wikipedia.org/wiki/Additive_inverse"),
    "𝕍": overloadDescription("negation", "https://en.wikipedia.org/wiki/Euclidean_vector#Scalar_multiplication"),
  },
  [MethodId.INVERT]: {
    "ℝ": overloadDescription("inverse", "https://en.wikipedia.org/wiki/Multiplicative_inverse"),
    "𝕋": overloadDescription("inverse", "https://en.wikipedia.org/wiki/Invertible_matrix"),
    "𝕂": overloadDescription("inverse", "https://en.wikipedia.org/wiki/Complementary_colors"),
    "𝔾": overloadDescription("inverse", "https://en.wikipedia.org/wiki/Complement_(set_theory)"),
  },
  [MethodId.MOD]: {
    _: overloadDescription("positive remainder", "divisor", "https://en.wikipedia.org/wiki/Remainder")
  },
  [MethodId.SIN]: {
    _: overloadDescription("sine", "https://en.wikipedia.org/wiki/Trigonometric_functions")
  },
  [MethodId.COS]: {
    _: overloadDescription("cosine", "https://en.wikipedia.org/wiki/Trigonometric_functions")
  },
  [MethodId.TAN]: {
    _: overloadDescription("tangent", "https://en.wikipedia.org/wiki/Trigonometric_functions")
  },
  [MethodId.ASIN]: {
    _: overloadDescription("arcsine", "https://en.wikipedia.org/wiki/Inverse_trigonometric_functions")
  },
  [MethodId.ACOS]: {
    _: overloadDescription("arccosine", "https://en.wikipedia.org/wiki/Inverse_trigonometric_functions")
  },
  [MethodId.ATAN2]: {
    _: overloadDescription("arctangent", "x", "https://en.wikipedia.org/wiki/Atan2")
  },
  [MethodId.ABS]: {
    "ℝ": overloadDescription("absolute value", "https://en.wikipedia.org/wiki/Absolute_value"),
    "𝕍": overloadDescription("length", "https://en.wikipedia.org/wiki/Norm_(mathematics)#Euclidean_norm"),
  },
  [MethodId.EXP]: {
    _: overloadDescription("exponential function", "https://en.wikipedia.org/wiki/Exponential_function")
  },
  [MethodId.LOG]: {
    _: overloadDescription("natural_logarithm", "https://en.wikipedia.org/wiki/Natural_logarithm")
  },
  [MethodId.POW]: {
    _: overloadDescription("to the power", "number", "https://en.wikipedia.org/wiki/Exponentiation")
  },
  [MethodId.RANDOM_NUMBER]: {
    _: overloadDescription("random number", "from", "to", "https://en.wikipedia.org/wiki/Random_number_generation")
  },
  [MethodId.PSEUDO_RANDOM_NUMBER]: {
    _: overloadDescription("seeded number", "from", "to", "seed", "https://en.wikipedia.org/wiki/Random_number_generation")
  },
  [MethodId.FLOOR]: {
    _: overloadDescription("rounded down", "https://en.wikipedia.org/wiki/Rounding")
  },
  [MethodId.CEIL]: {
    _: overloadDescription("rounded up", "https://en.wikipedia.org/wiki/Rounding")
  },
  [MethodId.ROUND]: {
    _: overloadDescription("rounded", "https://en.wikipedia.org/wiki/Rounding")
  },
  [MethodId.MIN]: {
    _: overloadDescription("smallest", "number")
  },
  [MethodId.MAX]: {
    _: overloadDescription("largest", "number")
  },
  [MethodId.LERP]: {
    _: overloadDescription("interpolated to", "end", "factor", "https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support")
  },
  [MethodId.SIGN]: {
    _: overloadDescription("sign", "https://en.wikipedia.org/wiki/Sign_(mathematics)")
  },
  [MethodId.SQRT]: {
    _: overloadDescription("square root", "https://en.wikipedia.org/wiki/SquareRoot")
  },

  /** Boolean operators */
  [MethodId.EQU]: {
    _: overloadDescription("is equal to", "param", "https://en.wikipedia.org/wiki/Inequality_(mathematics)")
  },
  [MethodId.NEQ]: {
    _: overloadDescription("is not equal to", "param", "https://en.wikipedia.org/wiki/Inequality_(mathematics)")
  },
  [MethodId.GT]: {
    _: overloadDescription("is greater than", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)")
  },
  [MethodId.GTE]: {
    _: overloadDescription("is greater or equal to", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)")
  },
  [MethodId.LT]: {
    _: overloadDescription("is smaller than", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)")
  },
  [MethodId.LTE]: {
    _: overloadDescription("is smaller or equal to", "number", "https://en.wikipedia.org/wiki/Inequality_(mathematics)")
  },
  [MethodId.AND]: {
    "𝔹": overloadDescription("and", "boolean", "https://en.wikipedia.org/wiki/Logical_conjunction"),
    "ℝ": overloadDescription("bitwise AND", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#AND"),
  },
  [MethodId.OR]: {
    "𝔹": overloadDescription("or", "boolean", "https://en.wikipedia.org/wiki/Logical_disjunction"),
    "ℝ": overloadDescription("bitwise OR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#OR"),
  },
  [MethodId.XOR]: {
    "𝔹": overloadDescription("exclusive or", "boolean", "https://en.wikipedia.org/wiki/Exclusive_or"),
    "ℝ": overloadDescription("bitwise XOR", "number", "https://en.wikipedia.org/wiki/Bitwise_operation#XOR"),
  },
  [MethodId.NOT]: {
    "𝔹": overloadDescription("not", "https://en.wikipedia.org/wiki/Negation"),
    "ℝ": overloadDescription("bitwise NOT", "https://en.wikipedia.org/wiki/Bitwise_operation#NOT"),
  },
  [MethodId.EQU_EMPTY_SHAPE]: {
    _: overloadDescription("is approximately empty?")
  },

  /* Conditional operators **/
  [MethodId.ITE]: {
    _: overloadDescription("if", "boolean", "else", "https://en.wikipedia.org/wiki/%3F:#Python")
  },

  /** Stateful operators */
  [MethodId.INTEGRAL]: {
    _: overloadDescription("plus time integral", "velocity", "https://en.wikipedia.org/wiki/Velocity")
  },
  [MethodId.DERIVATIVE]: {
    _: overloadDescription("derivative wrt time", "active?", "https://en.wikipedia.org/wiki/Velocity#Instantaneous_velocity")
  },
  [MethodId.CLAMPED_INTEGRAL]: {
    _: overloadDescription("plus time integraal, clamped", "minimum", "maximum", "velocity", "https://en.wikipedia.org/wiki/Velocity")
  },

  /** Event operators */
  [MethodId.WHEN]: {
    _: overloadDescription("when", "trigger", "http://reactivex.io/documentation/operators/sample.html")
  },
  [MethodId.TIMER]: {
    _: overloadDescription("after", "seconds", "repeat?", "immediately?", "http://reactivex.io/documentation/operators/timer.html")
  },
  [MethodId.RISING]: {
    _: overloadDescription("count rising edges", "https://en.wikipedia.org/wiki/Signal_edge")
  },
  [MethodId.CALM]: {
    _: overloadDescription("block updates with same value", "shallow?", "https://rxmarbles.com/#distinctUntilChanged")
  },
  [MethodId.TAKE]: {
    _: overloadDescription("take updates", "count", "http://reactivex.io/documentation/operators/take.html")
  },
  [MethodId.SKIP]: {
    _: overloadDescription("skip updates", "count", "http://reactivex.io/documentation/operators/skip.html")
  },
  [MethodId.BUFFER]: {
    _: overloadDescription("buffer updates", "count", "delay?", "active?", "http://reactivex.io/documentation/operators/buffer.html")
  },
  [MethodId.RECENT]: {
    _: overloadDescription("recent updates", "duration [@<0 ⇒ stamps | @>0 ⇒ seconds]", "delay?", "slider", "active?", "http://reactivex.io/documentation/operators/buffer.html")
  },
  [MethodId.FILTER]: {
    _: overloadDescription("filter updates", "pass through?", "http://reactivex.io/documentation/operators/filter.html")
  },
  [MethodId.SNAPSHOT]: {
    _: overloadDescription("on update, snapshot of", "source", "http://reactivex.io/documentation/operators/sample.html")
  },
  [MethodId.ASAP]: {
    _: overloadDescription("as soon as possible", "maximum intra-frame updates")
  },
  [MethodId.MERGE]: {
    _: overloadDescription("merged with", "updates", "http://reactivex.io/documentation/operators/merge.html")
  },
  [MethodId.MERGE_LEFT]: {
    _: overloadDescription("initialize and merge with", "updates", "http://reactivex.io/documentation/operators/merge.html")
  },
  [MethodId.MERGE_BOTH]: {
    _: overloadDescription("merged with", "simultaneous", "updates", "http://reactivex.io/documentation/operators/merge.html")
  },
  [MethodId.VSYNC]: {
    _: overloadDescription("when shown on screen", "active?")
  },

  /** Transformation operators */
  [MethodId.TRANSLATE_V]: {
    _: overloadDescription("translated", "param", "https://en.wikipedia.org/wiki/Translation_(geometry)")
  },
  [MethodId.TRANSLATE_X]: {
    _: overloadDescription("translated", "horizontally", "https://en.wikipedia.org/wiki/Translation_(geometry)")
  },
  [MethodId.TRANSLATE_Y]: {
    _: overloadDescription("translated", "vertically", "https://en.wikipedia.org/wiki/Translation_(geometry)")
  },
  [MethodId.ROTATE]: {
    _: overloadDescription("rotated", "hours", "https://en.wikipedia.org/wiki/Rotation_(mathematics)")
  },
  [MethodId.SCALE]: {
    _: overloadDescription("scaled", "factor", "https://en.wikipedia.org/wiki/Scaling_(geometry)")
  },
  [MethodId.SCALE_V]: {
    _: overloadDescription("scaled", "factors", "https://en.wikipedia.org/wiki/Scaling_(geometry)")
  },
  [MethodId.SCALE_X]: {
    _: overloadDescription("scaled", "horizontally", "https://en.wikipedia.org/wiki/Scaling_(geometry)")
  },
  [MethodId.SCALE_Y]: {
    _: overloadDescription("scaled", "vertically", "https://en.wikipedia.org/wiki/Scaling_(geometry)")
  },
  [MethodId.PIXEL_SNAP]: {
    _: overloadDescription("snapped to pixels", "origin?", "x axis?", "y axis?", "https://en.wikipedia.org/wiki/Snap_(computer_graphics)")
  },

  /** Graphics operators */
  [MethodId.PAINT_SOLID]: {
    _: overloadDescription("painted", "color")
  },
  [MethodId.PAINT_LINEAR]: {
    _: overloadDescription("painted", "start color", "end color", "start point", "end point")
  },
  [MethodId.OVER]: {
    "[𝔾]": overloadDescription("stacked on top of each other"),
    _: overloadDescription("in front of", "graphic"),
  },
  [MethodId.UNDER]: {
    "[𝔾]": overloadDescription("stacked one below the other"),
    _: overloadDescription("behind", "graphic"),
  },
  [MethodId.INTERSECTION]: {
    _: overloadDescription("intersection with", "graphic", "https://en.wikipedia.org/wiki/Intersection_(set_theory)")
  },
  [MethodId.EXCLUSION]: {
    _: overloadDescription("subtract", "graphic", "https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement")
  },
  [MethodId.PLOT_GRAPH]: {
    _: overloadDescription("plot graph over time", "thickness", "tolerance", "maximum #points [@<0 ⇒ ∞ #points]", "https://en.wikipedia.org/wiki/Graph_of_a_function")
  },
  [MethodId.CLONE]: {
    _: overloadDescription("duplicated", "count", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation")
  },
  [MethodId.TRANSFORM]: {
    _: overloadDescription("transformed with", "transformation", "https://en.wikipedia.org/wiki/Affine_transformation")
  },
  [MethodId.PLOT_POINTS]: {
    _: overloadDescription("updates over time", "thickness", "tolerance", "maximum #points [@<0 ⇒ ∞ #points]", "https://en.wikipedia.org/wiki/Graph_of_a_function")
  },
  [MethodId.TRANSPARENTIZE]: {
    _: overloadDescription("transparent", "factor", "https://en.wikipedia.org/wiki/Transparency_(graphic)")
  },
  [MethodId.FILLED]: {
    "𝕍": overloadDescription("as graphic", "thickness"),
    "𝕊": overloadDescription("as graphic", "horizontal text alignment", "vertical text alignment", "line spacing"),
    _: overloadDescription("as graphic", "color"),
  },
  [MethodId.CONTAINS_POINT]: {
    _: overloadDescription("contains point?", "point")
  },
  [MethodId.RENDER]: {
    _: overloadDescription("render to image", "width [pixels]", "height [pixels]", "interpolated?")
  },
  [MethodId.COMPOSE]: {
    _: overloadDescription("compose", "operator", "foreground", "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation")
  },

  /** Vector and matrix operators */
  [MethodId.HOR]:
  {
    "𝕋": overloadDescription("red basis vector", "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"),
    _: overloadDescription("horizontal coordinate", "https://en.wikipedia.org/wiki/Cartesian_coordinate_system"),
  },
  [MethodId.VER]: {
    "𝕋": overloadDescription("green basis vector", "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"),
    _: overloadDescription("vertical coordinate", "https://en.wikipedia.org/wiki/Cartesian_coordinate_system"),
  },
  [MethodId.WEIGHT]: {
    _: overloadDescription("w coordinate", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/")
  },
  [MethodId.ORIG]: {
    "𝕋": overloadDescription("yellow basis origin", "https://en.wikipedia.org/wiki/Origin_(mathematics)"),
  },
  [MethodId.POST_TRANSFORMS]: {
    _: overloadDescription("transformations after labeled graphic", "https://en.wikipedia.org/wiki/Graphics_pipeline#The_World_Coordinate_System")
  },
  [MethodId.DOT]: {
    _: overloadDescription("dot product with", "param", "https://en.wikipedia.org/wiki/Dot_product")
  },
  [MethodId.DET]: {
    _: overloadDescription("determinant with", "param", "https://en.wikipedia.org/wiki/Determinant#2_%C3%97_2_matrices")
  },
  [MethodId.REFLECT]: {
    _: overloadDescription("reflected across", "direction", "https://en.wikipedia.org/wiki/Reflection_(mathematics)")
  },
  [MethodId.ANGLE]: {
    _: overloadDescription("angle between", "param", "radians?", "https://en.wikipedia.org/wiki/Dot_product#Geometric_definition")
  },
  [MethodId.TOWARDS]: {
    _: overloadDescription("in the direction of", "param")
  },
  [MethodId.CARTESIAN]: {
    _: overloadDescription("to Euclidean point or vector", "https://en.wikipedia.org/wiki/Projective_space")
  },
  [MethodId.NORMALIZE]: {
    _: overloadDescription("normalized", "https://en.wikipedia.org/wiki/Unit_vector")
  },
  [MethodId.CROSS]: {
    _: overloadDescription("3D cross product product met", "param", "https://en.wikipedia.org/wiki/Cross_product")
  },

  [MethodId.BOUNDING_POINT]: {
    _: overloadDescription("point in AABB", "Barycentric coordinates", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box")
  },
  [MethodId.BOUNDING_WIDTH]: {
    _: overloadDescription("width of AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box")
  },
  [MethodId.BOUNDING_HEIGHT]: {
    _: overloadDescription("heigt of AABB", "https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box")
  },

  [MethodId.HIT_TEST]: {
    _: overloadDescription("hits?", "with label", "without label", "active?", "maximum depth")
  },
  [MethodId.RAY_CAST]: {
    _: overloadDescription("hit query", "data type", "with label", "without label", "active?")
  },
  [MethodId.HIT_REGION]: {
    _: overloadDescription("hit region", "label", "data")
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
    _: overloadDescription("puzzle", "kind [@=1 ⇒ fixed blocks, @2 ⇒ free values]")
  },
  [MethodId.OUTLINE]: {
    _: overloadDescription("outlines", "enabled?")
  },
  [MethodId.CORRECT]: {
    _: overloadDescription("correct", "preview?", "wrong value")
  },
  [MethodId.PREMADE]: {
    _: overloadDescription("pre-made", "skip?")
  },
  [MethodId.SELECT]: {
    _: overloadDescription("selected", "functie?")
  },
  [MethodId.IGNORE]: {
    _: overloadDescription("ignored")
  },
  [MethodId.CYCLIC]: {
    _: overloadDescription("animation cycle", "duration")
  },
  [MethodId.FEEDBACK]: {
    _: overloadDescription("feedback", "preview?", "initial value", "recursive reference")
  },
  [MethodId.ACTUATOR]: {
    _: overloadDescription("actuator", "which [@=0 ⇒ off | @=1 ⇒ eye | @=2 ⇒ ear]", "actuator reference")
  },

  /** Drawing methods */
  [MethodId.MOVE_TO]: {
    _: overloadDescription("move to", "start point", "https://www.w3schools.com/tags/canvas_moveto.asp")
  },
  [MethodId.LINE_TO]: {
    _: overloadDescription("draw line to", "end point", "https://www.w3schools.com/tags/canvas_lineto.asp")
  },
  [MethodId.QUAD_TO]: {
    _: overloadDescription("draw quadratic curve to", "end point", "control point", "https://www.w3schools.com/tags/canvas_quadraticcurveto.asp")
  },
  [MethodId.CUBIC_TO]: {
    _: overloadDescription("draw cubic curve to", "end point", "first control point", "second control point", "https://www.w3schools.com/tags/canvas_beziercurveto.asp")
  },
  [MethodId.LAST_POINT]: {
    _: overloadDescription("endpoint")
  },
  [MethodId.GET_POINTS]: {
    _: overloadDescription("list of points", "corners only?")
  },
  // [MethodId.ARC_TO]: {
  //   _: overloadDescriptor("teken circleboog naar", "start direction", "end point", "radius", "https://www.w3schools.com/tags/canvas_arcto.asp")
  // },

  [MethodId.STROKE]: {
    "𝔽": overloadDescription("stroked", "color", "thickness", "round corners?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
    _: overloadDescription("stroked", "color", "thickness", "closed?", "round corners?", "https://www.w3schools.com/tags/canvas_stroke.asp"),
  },

  /** Factory methods */
  // [MethodId.NEW_BINDING]: "",
  [MethodId.VECTOR_2D]: {
    "ℝ²": overloadDescription("https://en.wikipedia.org/wiki/Euclidean_vector"),
    _: overloadDescription("param", "x coordinate", "y coordinate", "https://en.wikipedia.org/wiki/Euclidean_vector"),
  },
  [MethodId.POINT_2D]: {
    "ℝ²": overloadDescription("https://en.wikipedia.org/wiki/Point_(geometry)"),
    _: overloadDescription("point", "x coordinate", "y coordinate", "https://en.wikipedia.org/wiki/Point_(geometry)")
  },
  [MethodId.HOMOGENEOUS_2D]: {
    "ℝ³": overloadDescription("https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/"),
    _: overloadDescription("point or vector", "x coordinate", "y coordinate", "w coordinate", "https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/")
  },
  [MethodId.MATRIX_2D]: {
    "𝕍³": overloadDescription("https://en.wikipedia.org/wiki/Affine_transformation"),
    _: overloadDescription("transformation", "x direction", "y direction", "origin", "https://en.wikipedia.org/wiki/Affine_transformation")
  },
  [MethodId.COLOR_RGB]: {
    "ℝ³": overloadDescription("https://en.wikipedia.org/wiki/RGB_color_model"),
    _: overloadDescription("color", "red", "green", "blue", "https://en.wikipedia.org/wiki/RGB_color_model"),
  },
  [MethodId.COLOR_HSL]: {
    _: overloadDescription("color", "hue", "saturation", "lightness", "perceptual?", "https://en.wikipedia.org/wiki/HSL_and_HSV")
  },
  [MethodId.SHAPE_NGON]: {
    _: overloadDescription("regular polygon", "corner count", "https://en.wikipedia.org/wiki/Regular_polygon")
  },
  [MethodId.GAMEPAD_SWITCH]: {
    _: overloadDescription("gamepad switch", "switch id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout")
  },
  [MethodId.GAMEPAD_NUMBER]: {
    _: overloadDescription("gamepad button", "button id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout")
  },
  [MethodId.GAMEPAD_VECTOR]: {
    _: overloadDescription("gamepad direction", "direction id", "gamepad id", "https://www.w3.org/TR/gamepad/#fig-visual-representation-of-a-standard-gamepad-layout")
  },
  [MethodId.FIGURE_LINE]: {
    _: overloadDescription("line segment", "start point", "end point", "https://en.wikipedia.org/wiki/Line_segment")
  },
  [MethodId.FIGURE_RECT]: {
    _: overloadDescription("rectangle", "width", "height", "corner rounding", "center point", "https://en.wikipedia.org/wiki/Rectangle")
  },
  [MethodId.FIGURE_CIRCLE]: {
    _: overloadDescription("circle", "radius", "center point", "https://en.wikipedia.org/wiki/Circle")
  },
  [MethodId.FIGURE_ELLIPSE]: {
    _: overloadDescription("ellipse", "width", "height", "center point", "rotation", "start angle", "end angle", "clockwise?", "closed?", "https://en.wikipedia.org/wiki/Ellipse")
  },
  [MethodId.FIGURE_ARC]: {
    _: overloadDescription("arc", "radius", "center point", "start angle", "end angle", "clockwise?", "closed?", "https://en.wikipedia.org/wiki/Circular_arc")
  },
  [MethodId.DRAWING_PATH]: {
    _: overloadDescription("line drawing", "start point", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths")
  },
  [MethodId.BITMAP_IMAGE]: {
    _: overloadDescription("external sprite", "URI", "interpolated?", "height", "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)")
  },
  [MethodId.EMPTY_LIST]: {
    _: overloadDescription("empty array", "type", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.EMPTY_SET]: {
    _: overloadDescription("empty set", "type", "https://en.wikipedia.org/wiki/Set_(mathematics)")
  },
  [MethodId.EMPTY_MAP]: {
    _: overloadDescription("empty map [associative array]", "key type", "param type", "https://en.wikipedia.org/wiki/Associative_array")
  },
  [MethodId.NUMERIC_RANGE]: {
    _: overloadDescription("numeric range", "start", "step", "count", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.MOUSE_BUTTON]: {
    _: overloadDescription("mouse down tracker", "which button [@=0 ⇒ any]", "support touch?")
  },
  [MethodId.MOUSE_POSITION]: {
    _: overloadDescription("mouse position tracker", "allow hover?", "support touch?")
  },
  [MethodId.TOUCH_TRACKER]: {
    _: overloadDescription("multi touch tracker")
  },
  [MethodId.TOUCH_DOWN]: {
    _: overloadDescription("touch down tracker", "which touch")
  },
  [MethodId.TOUCH_POSITION]: {
    _: overloadDescription("touch position tracker", "which touch")
  },
  [MethodId.KEY_TRACKER]: {
    _: overloadDescription("keyboard press tracker [full view only]", "code", "debug", "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#try_it_out")
  },
  [MethodId.UNIQUE_ID]: {
    _: overloadDescription("unique code")
  },
  [MethodId.SOUND_STREAM]: {
    _: overloadDescription("sound file stream", "id or URI")
  },
  [MethodId.SOUND_BUFFER]: {
    _: overloadDescription("sound file buffer", "id or URI")
  },
  [MethodId.PIXELS_PER_UNIT]: {
    _: overloadDescription("screen pixels per ViKiD unit")
  },
  // [MethodId.NEW_MICROPHONE]: {
  //   _: overloadDescriptor("microphone sound source")
  // },

  /** List methods */
  [MethodId.APPEND]: {
    _: overloadDescription("append", "element", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.INSERT]: {
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescription("insert", "set", "https://en.wikipedia.org/wiki/Set_(mathematics)"),
    _: overloadDescription("insert", "index or indices", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.CONCAT]: {
    _: overloadDescription("concatenate", "elements", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.SLICE]: {
    _: overloadDescription("sliced", "index", "count", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.REMOVE]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescription("remove", "key", "https://en.wikipedia.org/wiki/Associative_array"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescription("remove", "key", "https://en.wikipedia.org/wiki/Set_(mathematics)"),
    _: overloadDescription("remove", "index", "count", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.LENGTH]: {
    _: overloadDescription("element count", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.ITEM]: {
    _: overloadDescription("get element(s) at", "index or indices or conditions", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.SEARCH]: {
    _: overloadDescription("indices of", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.CONTAINS]: {
    _: overloadDescription("contains", "element(s)", "https://en.wikipedia.org/wiki/Element_(mathematics)")
  },
  [MethodId.REPLACE]: {
    _: overloadDescription("with element(s) at", "index or indices", "element(s)", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.REVERSE]: {
    _: overloadDescription("reversed", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.SUM]: {
    _: overloadDescription("sum", "zero if empty?", "https://simple.wikipedia.org/wiki/Sum")
  },
  [MethodId.PRODUCT]: {
    _: overloadDescription("product", "one if empty?", "https://simple.wikipedia.org/wiki/Product_(mathematics)")
  },
  [MethodId.FLATTEN]: {
    _: overloadDescription("flatten", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat")
  },
  // [MethodId.TRIM]: {
  //   _: overloadDescriptor("trim elements", "which [@>0 ⇒ without stamp=@ | @≤0 ⇒ with stamp=-@]", "update when empty?")
  // },
  [MethodId.FILL]: {
    _: overloadDescription("filled with", "param", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.ORDER]: {
    _: overloadDescription("indices of ordered elements", "descending?")
  },
  [MethodId.REPEAT]: {
    _: overloadDescription("repeated as list", "count", "https://en.wikipedia.org/wiki/Array_data_structure")
  },
  [MethodId.TO_DRAWING]: {
    "[𝕍]": overloadDescription("as line drawing", "closed?", "starting point", "separate segments?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths"),
    "[[𝕍]]": overloadDescription("as line drawing", "starting point", "separate segments?", "https://www.html5canvastutorials.com/tutorials/html5-canvas-paths")
  },
  [MethodId.TO_SET]: {
    _: overloadDescription("as set", "https://en.wikipedia.org/wiki/Set_(mathematics)")
  },
  [MethodId.TO_MAP]: {
    _: overloadDescription("as map [associative array]", "https://en.wikipedia.org/wiki/Associative_array")
  },
  [MethodId.TRANSPOSE]: {
    _: overloadDescription("transposed", "https://en.wikipedia.org/wiki/Transpose")
  },

  [MethodId.PRINT]: {
    "𝕍": overloadDescription("as text", "digits after decimal point"),
    "𝕋": overloadDescription("as text", "digits after decimal point"),
    "ℝ": overloadDescription("as text", "digits after decimal point"),
    _: overloadDescription("as text"),
  },

  [MethodId.CASE]: {
    _: overloadDescription("letter case", "mode [@<0 ⇒ lowercase | @>0 ⇒ uppercase]", "https://en.wikipedia.org/wiki/Letter_case")
  },
  [MethodId.JOIN]: {
    _: overloadDescription("join text", "separator")
  },
  [MethodId.FORMAT]: {
    _: overloadDescription("format to text", "format", "indent")
  },
  [MethodId.PARSE]: {
    _: overloadDescription("parse from text", "formaat", "type")
  },
  [MethodId.PROMPT]: {
    _: overloadDescription("ask the user for text input", "default input", "open!")
  },
  [MethodId.ALERT]: {
    _: overloadDescription("notify the user", "open!")
  },
  [MethodId.CONFIRM]: {
    _: overloadDescription("ask the user for confirmation", "open!")
  },
  [MethodId.BROWSE]: {
    _: overloadDescription("open the HTML page in the browser", "open!")
  },

  [MethodId.PAD]: {
    _: overloadDescription("padded with", "param", "length", "at the end?")
  },

  [MethodId.INDEX]: {
    _: overloadDescription("instance index", "which [@=0 ⇒ serial_number | @=1 ⇒ batch_index | @=2 ⇒ instance_id]")
  },
  [MethodId.GET_STAMP]: {
    _: overloadDescription("get timestamp")
  },
  [MethodId.SET_STAMP]: {
    _: overloadDescription("set timestamp", "new timestamp")
  },

  [MethodId.PLAY_SOUND]: {
    _: overloadDescription("play sound", "active?", "rate")
  },
  [MethodId.SET_VOLUME]: {
    _: overloadDescription("with volume", "param")
  },
  // [MethodId.ANALYSE_AUDIO]: {
  //   _: overloadDescriptor("play and analyse sound", "Fast Fourier Transform size", "minimum Decibels", "maximum Decibels", "smoothing time constant", "active?", "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode")
  // },
  [MethodId.LOOP_SOUND]: {
    "💥": overloadDescription("loop sound", "active?", "start time", "duration", "https://en.wikipedia.org/wiki/Loop_(music)"),
    "🎶": overloadDescription("loop sound", "active?", "https://en.wikipedia.org/wiki/Loop_(music)"),
  },
  [MethodId.SLICE_SOUND]: {
    _: overloadDescription("slice sound", "start time", "duration")
  },
  [MethodId.IS_PLAYING]: {
    _: overloadDescription("is playing?")
  },
  [MethodId.ADD_AUDIO]: {
    _: overloadDescription("plus", "audio")
  },
  [MethodId.SUM_AUDIO]: {
    _: overloadDescription("sum")
  },

  [MethodId.LOCAL_STORAGE]: {
    _: overloadDescription("on update, save", "key", "load!", "active?")
  },
  [MethodId.DEBUG_PRINT]: {
    _: overloadDescription("print to debug console", "prefix", "active?")
  },
  [MethodId.DEBUG_PAUSE]: {
    _: overloadDescription("breakpoint", "active?")
  },

  [MethodId.SATELLITE]: {
    _: overloadDescription("satellite", "type")
  },
  [MethodId.SEND]: {
    _: overloadDescription("send", "message", "count")
  },
  [MethodId.RECEIVE]: {
    _: overloadDescription("receive messages", "empty?", "asap")
  },

  [MethodId.TUPLE_2]: {
    "𝕍": overloadDescription("https://en.wikipedia.org/wiki/Tuple"),
    _: overloadDescription("couple", "element 0", "element 1", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.TUPLE_3]: {
    "𝕋": overloadDescription("https://en.wikipedia.org/wiki/Tuple"),
    "𝕂": overloadDescription("https://en.wikipedia.org/wiki/Tuple"),
    "𝕍": overloadDescription("https://en.wikipedia.org/wiki/Tuple"),
    _: overloadDescription("triple", "element 0", "element 1", "element 2", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.TUPLE_4]: {
    _: overloadDescription("quadruple", "element 0", "element 1", "element 2", "element 3", "https://en.wikipedia.org/wiki/Tuple")
  },

  [MethodId.GET_ELEMENT_0]: {
    _: overloadDescription("get element 0", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.GET_ELEMENT_1]: {
    _: overloadDescription("get element 1", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.GET_ELEMENT_2]: {
    _: overloadDescription("get element 2", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.GET_ELEMENT_3]: {
    _: overloadDescription("get element 3", "https://en.wikipedia.org/wiki/Tuple")
  },

  [MethodId.TO_LIST]: {
    "∀α ∀κ ∈ ℝ∪𝕊: ⧼ κ ↦ α ⧽": overloadDescription("get all elements", "ordering"),
    "∀κ ∈ ℝ∪𝕊: {κ}": overloadDescription("get all elements", "ordering"),
    _: overloadDescription("get all elements", "https://en.wikipedia.org/wiki/Tuple"),
  },

  [MethodId.WITH_ELEMENT_0]: {
    _: overloadDescription("replace element 0", "new element", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.WITH_ELEMENT_1]: {
    _: overloadDescription("replace element 1", "new element", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.WITH_ELEMENT_2]: {
    _: overloadDescription("replace element 2", "new element", "https://en.wikipedia.org/wiki/Tuple")
  },
  [MethodId.WITH_ELEMENT_3]: {
    _: overloadDescription("replace element 3", "new element", "https://en.wikipedia.org/wiki/Tuple")
  },

  [MethodId.SET_UNION]: {
    _: overloadDescription("union with", "set", "https://en.wikipedia.org/wiki/Union_(set_theory)")
  },
  [MethodId.SET_INTERSECTION]: {
    _: overloadDescription("intersection with", "set", "https://en.wikipedia.org/wiki/Intersection_(set_theory)")
  },
  [MethodId.SET_DIFFERENCE]: {
    _: overloadDescription("difference with", "set", "https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement")
  },
  [MethodId.SET_SYMMETRIC_DIFFERENCE]: {
    _: overloadDescription("symmetric difference with", "set", "https://en.wikipedia.org/wiki/Symmetric_difference")
  },

  [MethodId.DYN_FROM]: {
    _: overloadDescription("to dynamic value", "https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information")
  },
  [MethodId.DYN_IS]: {
    _: overloadDescription("is of type", "type", "https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information")
  },
  [MethodId.DYN_AS]: {
    _: overloadDescription("as value of type", "type", "https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information")
  },
});
