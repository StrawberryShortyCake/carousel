import { it, expect } from "vitest";
import React from "react";

import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.jsx";

import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function(){
  // expect it to render without issue
  render( <Card
          caption={TEST_IMAGES[0].caption}
          src={TEST_IMAGES[0].src}
          currNum={1}
          totalNum={TEST_IMAGES.length}
        />);
});

