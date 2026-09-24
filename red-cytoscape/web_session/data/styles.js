var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(204,204,204)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "border-width" : 0.0,
      "text-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "font-size" : 12,
      "shape" : "ellipse",
      "height" : 100.0,
      "width" : 100.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "background-color" : "rgb(0,153,255)",
      "background-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[EdgeCount > 23]",
    "css" : {
      "background-color" : "rgb(68,1,84)"
    }
  }, {
    "selector" : "node[EdgeCount = 23]",
    "css" : {
      "background-color" : "rgb(255,0,51)"
    }
  }, {
    "selector" : "node[EdgeCount > 12,1563977][EdgeCount < 23]",
    "css" : {
      "background-color" : "mapData(EdgeCount,12,1563977,23,rgb(204,153,255),rgb(255,0,51))"
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 12,1563977]",
    "css" : {
      "background-color" : "mapData(EdgeCount,1,12,1563977,rgb(153,204,255),rgb(204,153,255))"
    }
  }, {
    "selector" : "node[EdgeCount = 1]",
    "css" : {
      "background-color" : "rgb(153,204,255)"
    }
  }, {
    "selector" : "node[EdgeCount < 1]",
    "css" : {
      "background-color" : "rgb(253,231,37)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "width" : 2.0,
      "line-color" : "rgb(132,132,132)",
      "text-opacity" : 1.0,
      "content" : "",
      "font-size" : 10,
      "opacity" : 1.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "target-arrow-shape" : "triangle",
      "target-arrow-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Marquee",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-color" : "rgb(153,153,153)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "border-width" : 0.0,
      "text-opacity" : 1.0,
      "color" : "rgb(102,102,102)",
      "font-size" : 12,
      "shape" : "ellipse",
      "height" : 20.0,
      "width" : 20.0,
      "border-opacity" : 1.0,
      "text-valign" : "bottom",
      "text-halign" : "center",
      "background-color" : "rgb(0,204,255)",
      "background-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[ID = 'Co-D']",
    "css" : {
      "background-color" : "rgb(153,255,153)"
    }
  }, {
    "selector" : "node[ID = 'Co-D;D;T']",
    "css" : {
      "background-color" : "rgb(255,253,173)"
    }
  }, {
    "selector" : "node[ID = 'D']",
    "css" : {
      "background-color" : "rgb(255,102,102)"
    }
  }, {
    "selector" : "node[ID = 'Co-D;Co-D;D']",
    "css" : {
      "background-color" : "rgb(255,204,153)"
    }
  }, {
    "selector" : "node[ID = 'Co-D;D']",
    "css" : {
      "background-color" : "rgb(255,204,153)"
    }
  }, {
    "selector" : "node[ID = 'Co-D;D;D']",
    "css" : {
      "background-color" : "rgb(255,204,153)"
    }
  }, {
    "selector" : "node[ID = 'D;Co-D']",
    "css" : {
      "background-color" : "rgb(255,204,153)"
    }
  }, {
    "selector" : "node[ID = 'T']",
    "css" : {
      "background-color" : "rgb(153,204,255)"
    }
  }, {
    "selector" : "node[ID = 'Co-D;T']",
    "css" : {
      "background-color" : "rgb(0,243,238)"
    }
  }, {
    "selector" : "node[ID = 'T;D;Co-D']",
    "css" : {
      "background-color" : "rgb(255,253,173)"
    }
  }, {
    "selector" : "node[ID = 'D;T']",
    "css" : {
      "background-color" : "rgb(204,204,255)"
    }
  }, {
    "selector" : "node[ID = 'T;Co-D']",
    "css" : {
      "background-color" : "rgb(0,243,238)"
    }
  }, {
    "selector" : "node[ID = 'T;D']",
    "css" : {
      "background-color" : "rgb(204,204,255)"
    }
  }, {
    "selector" : "node[ID = 'Co-D']",
    "css" : {
      "shape" : "v"
    }
  }, {
    "selector" : "node[ID = 'Co-D;D;T']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[ID = 'D']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[ID = 'Co-D;Co-D;D']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[ID = 'Co-D;D']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[ID = 'Co-D;D;D']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[ID = 'D;Co-D']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[ID = 'T']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[ID = 'Co-D;T']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[ID = 'T;D;Co-D']",
    "css" : {
      "shape" : "roundrectangle"
    }
  }, {
    "selector" : "node[ID = 'D;T']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[ID = 'T;Co-D']",
    "css" : {
      "shape" : "parallelogram"
    }
  }, {
    "selector" : "node[ID = 'T;D']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "width" : 2.0,
      "line-color" : "rgb(153,153,153)",
      "text-opacity" : 1.0,
      "font-size" : 1,
      "opacity" : 1.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)",
      "source-arrow-color" : "rgb(153,153,153)",
      "source-arrow-shape" : "none",
      "line-style" : "dashed",
      "target-arrow-shape" : "triangle",
      "target-arrow-color" : "rgb(153,153,153)",
      "content" : "data(EdgeBetweenness)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]