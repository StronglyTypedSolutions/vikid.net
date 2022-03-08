# Homogeneous points and vectors

In ViKiD, points and vectors are elements of a [2D projective space](https://en.wikipedia.org/wiki/Projective_space) and use [homogeneous coordinates](https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/). 

See also these [slides made with ViKiD](https://vikid.net/share?key=A9hlmv7YyQ3JdATPUUC69SqHuANJUdgkGgVZte14hlKf0lJkRIdBSVKhLk3Tdt68j7IdK9686NUg7RvMdyEux9HccHjUyztW30DQxtkmVgizJ7vDNA6Yqhfb08LXls8xPvdqI4JLnXz3b8NUEhrk01cuQK170DW1ZT2pahxZ5xLkYxkMdDAZtJ4Q85gX2zNxETwraWI1bkcWKuqmKD7Gk35GADjm)

# Example 1
- Adding the vector to a point with weight 2
- Because the point has weight 2, it will move by half the vector

```vikid-script
𝕍i𝕂i𝔻 v0.7-760-g848761a556d6 s22
{ 
  ‘⌂’: {* 
    v: ⟨-2 1 0⟩.mul(🕒.sin()),
    p👁: ⟨0 0 2⟩.«add»(v)
  }
}
```


# Example 2
- Adding a point with weight 2 to a point with weight 3

```vikid-script
𝕍i𝕂i𝔻 v0.7-760-g848761a556d6 s22
{ 
  ‘⌂’: {* 
    p👁: ⟨1 1 2⟩.«add»(⟨3 3 3⟩)
  }
}
```

> Projective points with a weight `w` can be regarded as point particles with a mass `w`. Adding points results in the `center of mass`. See also [this demo](https://vikid.net/share?key=A9hlmv7YyQ3JdATPUUC69SqHuAQmIAeJD5t29bI9CqPQtvISIR2oM2P8dnGIaGamaVMjbUAa2hCylGPc0ZB0CRWWwXroWR8T86zZC1sLfJe8swvjJPLZAN8x71Ix8ss1R90EpqQj1fRhVKbIKiBKBo13ysZSTbbcBIPQ1X7sb2kGi2NYa208ZHZrXd19seT2sKonxvMthDtNEZlNQdbs6Zxve4AY)

# Example 3
- Normalizing a point so it gets weight 1 (aka a Cartesian point)

```vikid-script
𝕍i𝕂i𝔻 v0.7-760-g848761a556d6 s22
{ 
  ‘⌂’: {* 
    p👁: ⟨0 0 2⟩.«cartesian»()
  }
}
```

# Choice of origin

Because of the extra `w` coordinate, the result of adding points _doesn't depend on the choice of the origin point_. 

For example, if we add points with Cartesian coordinates without `w` coordinate `⟨1,0⟩` and `⟨3,0⟩`, we would get `⟨4,0⟩`, so `1` unit away from `⟨3,0⟩`. 

If we now shift these points by `10` units, we get `⟨11,0⟩` and `⟨14,0⟩`, and the addition is `⟨25,0⟩`, clearly not `1` unit away from `⟨14,0⟩`!

Let's do the same using projective points with homogeneous coordinates, with weight `1` (also called `normalized points`). 

We now have to add `⟨1,0,1⟩` and `⟨3,0,1⟩`, this results in `⟨4,0,2⟩`. We normalize by dividing by `w`, so we get `⟨4/2,0/2,2/2⟩` = `⟨2,0,1⟩`. That is the center point between our two points, and is `1` unit away from both. 

Let's shift the points by `10` units, and add again. We get `⟨11,0,1⟩` + `⟨13,0,1⟩` = `⟨24,0,2⟩`, normalized this is `⟨12,0,1⟩`. Again this is the center point, and `1` unit away from both!

# Example 3
- Using point weights we can create simple fake 3D geometry

```vikid-script
𝕍i𝕂i𝔻 v0.7-761-g16665435591b s22
{ 
  ‘⌂’: {* 
    ‘plane depth’: 3,
    angle: 🕒,
    cos: angle.cos(),
    sin: angle.sin(),
    z1: ‘plane depth’.add(sin),
    z2: ‘plane depth’.sub(sin),
    y1: cos,
    y2: cos.neg(),
    p1: 🏭.homogeneous2d(1, y1, z1),
    p2: 🏭.homogeneous2d((-1), y1, z1),
    p3: 🏭.homogeneous2d((-1), y2, z2),
    p4: «🏭.homogeneous2d(1, y2, z2)»,
    ps: 🏭.emptyList(∅v).append(p1).append(p2).append(p3).append(p4),
    scene👁: ps.toDrawing(☒).filled().scale(6)
  }
}
```

> Note that we plan to add 3D support to ViKiD, but we need [WebGPU](https://en.wikipedia.org/wiki/WebGPU) for this. It is currently being implemented in most popular browsers, e.g. it should be released in [Chromium 102](https://chromestatus.com/feature/6213121689518080)




