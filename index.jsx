import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import { Docs, DocsSection } from "./components/Docs/index"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Testimonial from "./components/Testimonial/Testimonial"
import { defaultTestimonialImg, defaultTestimonialIcon } from "./components/Testimonial/Testimonial"
import { GiPumpkinLantern } from "react-icons/gi";



function App() {
  return (
    <Docs>
      <DocsSection title="Badge">
        <h3>Badges with the <code>square</code> shape</h3>
            <div className="badge-container">
              <Badge shape="square" color="gray">Gray</Badge>
              <Badge shape="square" color="red">Red</Badge>
              <Badge shape="square" color="yellow">Yellow</Badge>
              <Badge shape="square" color="green">Green</Badge>
              <Badge shape="square" color="blue">Blue</Badge>
            </div>
          <p>Badges with the <code>pill</code> shape:</p>
            <div className="badge-container">
              <Badge shape="pill" color="gray">Gray</Badge>
              <Badge shape="pill" color="red">Red</Badge>
              <Badge shape="pill" color="yellow">Yellow</Badge>
              <Badge shape="pill" color="green">Green</Badge>
              <Badge shape="pill" color="blue">Blue</Badge>
            </div>
      </DocsSection>
      
      <DocsSection title="Banner">
        <p>You can create banners with the following values for <code>status</code>:</p>
        <ul>
          <li><code>success</code></li>
          <li><code>warning</code></li>
          <li><code>error</code></li>
          <li><code>neutral</code> (default value)</li>
        </ul>
        <p>The value that you provide for <code>status</code> determines the title and styling of the banner.</p>
        <h3>Banner components with a single line:</h3>
          <div className="banner-container">
            <Banner status="success"/>
            <Banner status="warning"/>
            <Banner status="error"/>
            <Banner status="neutral" />
          </div>

          <h3>Banner components with multiple lines</h3>
          <div className="banner-container">
            <Banner status="success">
              <p>This is an example of a success message.</p>
            </Banner>
            <Banner status="warning">
              <p>This is an example of a warning message.</p>
            </Banner>
            <Banner status="error">
              <p>This is an example of an error message.</p>
            </Banner>
            <Banner status="neutral">
              <p>This is an example of a neutral or informational message. The message can span multiple lines. It can even have more than one paragraph.</p>
              <p>Here is an example of another paragraph being added to a neutral message.</p>
            </Banner>
          </div>

          <h3>Banners with no <code>status</code>, custom <code>title</code> value, and <code>showIcon = false</code></h3>
          <div className="banner-container">
            <Banner 
              showIcon={false}
              title="This is a custom title"
            />
          </div>
      </DocsSection>
  
      <DocsSection title="Card">
        <p>The <code>Card</code> component supports different customization options, including the following:</p>
        <ul>
          <li><strong>Heading Level</strong>: Set the card title's semantic heading level to any value between <code>h1</code> and <code>h6</code>. The default value is <code>h3</code>, but you can override this with the <code>headingLevel</code> prop.</li>
          <li><strong>Icon customization</strong>: Change the icon itself, the icon's color, and the icon's background.</li>
          <li><strong>Icon placement</strong>: Position the icon differently within the card. The default position is <code>top</code>.</li>
        </ul>

        <h3>Available props for icon colors</h3>
        <ul>
          <li>
            <code>iconBgColor</code>: Sets the background color of the icon container.
            <ul>
              <li>Accepts a <strong>predefined theme name</strong> ( <code>"gray"</code>, <code>"red"</code>, <code>"yellow"</code>, etc.).</li>
              <li>Accepts a <strong>custom hex code</strong> (for example, <code>"#FF5733"</code>).</li>
            </ul>
          </li>
          <li>
            <code>iconColor</code>: Sets the icon color.
            <ul>
              <li>Accepts a hex code (for example, <code>"#000000"</code> for black).</li>
              <li>If <code>iconColor</code> isn't specified, it defaults to the theme's icon color.</li>
            </ul>
          </li>
        </ul>

        <h3>Example: Using a predefined theme for <code>iconBgColor</code></h3>
          <p>This example applies the <code>"blue"</code> theme for the icon background. This automatically sets the icon's background color to <code>#DBEAFE</code> and the icon color to <code>#1E40AF"</code>. </p>
          <Card
            headingLevel = "h4"
            title="Easy Deployment"
            iconBgColor="blue"
          >
          <p>Deploy your app seamlessly with a straightfoward process.</p>
        </Card>

        <h3>Example: Overriding the icon color</h3>
        <p>This example also uses the <code>"blue"</code> theme but explicitly sets the icon color to <code>"indigo"</code>.</p>
        <Card
          headingLevel="h4"
          title="Easy Deployment"
          iconBgColor="blue"
          iconColor="indigo"
          iconPosition="right"
        >
          <p>Deploy your app seamlessly with a straightfoward process.</p>
        </Card>

        <h3>Example: Using a custom icon, icon color, and icon background color</h3>
        <Card
          headingLevel = "h4"
          title="Jack-o'-lantern"
          icon={<GiPumpkinLantern />}
          iconBgColor="black"
          iconColor="#F59E0B"
          cardBgColor="#3D1E5F"
          cardHeadingColor="#F59E0B"
          cardTextColor="#E3C7FF"
          iconPosition="bottom"
        >
          <p>Trick or treat!</p>
          <p>Get into the Halloween spirit with this spooky card.</p>
        </Card>
        <p>The following example shows the same card with the <code>iconPosition</code> prop set to <code>"left"</code>.</p>
        <Card
          headingLevel = "h4"
          title="Fun at the Pumpkin Patch"
          icon={<GiPumpkinLantern />}
          iconBgColor="#F59E0B"
          iconColor="#3D2C0F"
          cardBgColor="#FDE8C7"
          cardHeadingColor="#8C4A17"
          cardTextColor="#5C2D10"
          iconPosition="left"
        >
          <p>Trick or treat!</p>
          <p>Visit the pumpkin patch this fall! Carve pumpkins, make corn husk dolls, and enjoy seasonal treats.</p>
        </Card>

      </DocsSection>

      <DocsSection title="Testimonial">
        <p>The <code>Testimonial</code> component formats its content a bit differently depending on whether or not an image is provided. Keep the following in mind when you use this component:</p>
        <ul>
          <li><p><strong>Testimonial with image</strong>:</p>
            <ul>
              <li>To add an image, set the <code>img</code> prop to be the image source.</li>
              <li>Don't forget to specify a value for <code>alt</code>; if you don't specify alt text, the component defaults to using the value for the <code>author</code> prop.</li>
            </ul>
          </li>
          <li><strong>Testimonial without image</strong>: To use the default styling for a <code>Testimonial</code> component without an image, don't explicitly pass any value to the <code>img</code> prop.</li>
        </ul>
        <h3>Example: Testimonial with a default image</h3>
          <Testimonial 
            author="May Andersons"
            company="Workcation"
            role="CTO"
            img={defaultTestimonialImg}
          >
            This is an example of a testimonial component with an image. It has a quote icon for decoration. You can use the <code>img</code> prop to provide an image for the component.
          </Testimonial>
        <h3>Example: Testimonial with no image</h3>
          <Testimonial
            author="May Andersons"
            company="Workcation"
            role="CTO"
            logo={
              { 
                src: defaultTestimonialIcon,
                text: (
                  <>
                    <span style={{ color: "#1F2937" }}>Work</span>
                    <span style={{ color: "#2E59F3" }}>cation</span>
                  </>
                )
              }
            }
          >
              <p>"This is an example of a <code>Testimonial</code> component with no image. Normally, this would display an actual quote. You can format the quote that you pass in as <code>children</code> with HTML."</p>
          </Testimonial>
      </DocsSection>

      <DocsSection title="Tooltip">
        Tooltip
      </DocsSection>

      <DocsSection title="Toast">
        Toast
      </DocsSection>

      <DocsSection title="Menu">
        <Menu>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.Dropdown>
          </Menu>
      </DocsSection>
    </Docs>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
