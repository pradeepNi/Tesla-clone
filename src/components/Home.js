import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Component>
      <Section
        title="Model s"
        backgroundImage="model-s.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        backgroundImage="model-3.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model x"
        backgroundImage="model-x.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model y"
        backgroundImage="model-y.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost solar panels"
        backgroundImage="solar-panel.jpg"
        description="Money back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Get New Solar Roof"
        backgroundImage="solar-roof.jpg"
        description="Solar roof cost less than new roof plus solar roof"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        backgroundImage="accessories.jpg"
        description=""
        leftBtnText="Shop Now"
        rightBtnText=""
      />
    </Component>
  );
}

export default Home;

const Component = styled.div`
  height: 100vh;
`;
