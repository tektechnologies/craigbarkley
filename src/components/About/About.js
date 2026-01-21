import React from "react";
import { stackList } from "../../data/ClientData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/githubicon.png" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Craig Barkley</strong>. I'm originally
              from Illinois and have been living in Iowa for the past 14 years.
              During my time here, I have had numerous valuable experiences
              through several managerial and software developer positions,
              enhancing my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              As a Software Developer and Tech Educator, I enjoyed bridging the
              gap between technical functionalities and aesthetic design. I
              participated in brainstorming sessions, pair programming, and
              design reviews to contribute creative ideas and solutions. I
              collaborated daily with team members and product owners to develop
              solutions while also creating visually appealing graphics to
              enhance user experience.
            </ScrollAnimation>

            <br />
            <br />
            {/* // Section 1 - Kirkwood Experience */}
            <ScrollAnimation animateIn="fadeInLeft">
              At <strong>Kirkwood</strong>, I worked on facilities HVAC building automation and
              IoT devices, implementing solutions that integrated physical
              infrastructure with digital control systems to enhance operational
              efficiency and monitoring capabilities.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 2 - Newboco and DeltaV Experience */}
            <ScrollAnimation animateIn="fadeInLeft">
              With <strong>Newboco</strong> and <strong>DeltaV</strong>, I managed the Entretrack Application,
              DeltaV Website, and NewBoCo Website, along with several recurring
              client sites requiring ongoing maintenance, new feature
              development, and bug fixes. I also instructed Full Stack
              development courses, providing hands-on experience with database
              development including SQL queries, C# migrations, triggers, views,
              and MVC integration, combined with teaching data structures to
              aspiring developers.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 3 - CCR Database Modernization Overview */}
            <ScrollAnimation animateIn="fadeInLeft">
              At <strong>Circle Computer Resources (CCR)</strong>, I participated in a comprehensive database modernization initiative to refactor a tightly coupled MS SQL
              database with complex, legacy business logic. I conducted
              extensive database archaeology to map dependencies across numerous
              views with inconsistent naming conventions and obsolete legacy
              references.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 4 - CCR Technical Implementation */}
            <ScrollAnimation animateIn="fadeInLeft">
              I performed detailed schema analysis to document object
              relationships, data types, and constraint requirements across the
              legacy system. I consolidated multiple C# domain classes into
              optimized document schemas, ensuring data integrity throughout the
              transformation, and developed a GraphQL API layer to replace
              direct database queries, providing a flexible, type-safe interface
              for data access.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 5 - Key Activities */}
            <ScrollAnimation animateIn="fadeInLeft">
              My key activities included legacy system analysis and dependency
              mapping, database schema reverse engineering, data migration
              strategy and ETL process design, NoSQL data modeling and schema
              optimization, GraphQL schema design and resolver implementation,
              API testing and documentation, performance optimization and query
              tuning with RabbitMQ and Argo, and code refactoring for
              architectural improvement.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 6 - Languages & Frameworks */}
            <ScrollAnimation animateIn="fadeInLeft">
              I have extensive experience with back-end languages and frameworks
              including C# for .NET development, Java for general-purpose
              back-end programming, Node.js as a JavaScript runtime for
              server-side development, and server-side JavaScript for backend
              development.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 7 - Databases */}
            <ScrollAnimation animateIn="fadeInLeft">
              My database expertise spans both relational and NoSQL systems,
              including PostgreSQL, Microsoft SQL Server, and MongoDB for
              document-based data storage and retrieval.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 8 - APIs & Data */}
            <ScrollAnimation animateIn="fadeInLeft">
              I specialize in API development and data management, working with
              GraphQL as an API query language, RESTful API design for building
              and consuming REST APIs, JSON as a standard API data format,
              3rd-party API integration, and AJAX for asynchronous server
              communication.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 9 - Architecture & Design Patterns */}
            <ScrollAnimation animateIn="fadeInLeft">
              I implement industry-standard architecture and design patterns
              including MVC architecture following the Model-View-Controller
              pattern, server-side routing for HTTP request handling,
              understanding of the web request-response cycle, and microservices
              architecture utilizing Webpack Module Federation patterns.
            </ScrollAnimation>

            <br />
            <br />

            {/* // Section 10 - Messaging & Integration */}
            <ScrollAnimation animateIn="fadeInLeft">
              My system integration experience includes working with RabbitMQ as
              a message broker and queue system, BACnet protocol for industrial
              automation communication, general system integration for
              connecting disparate systems, and legacy system integration
              focusing on data migration and interoperability.
            </ScrollAnimation>

            <br />
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              As an Information Systems Manager, with a Bachelor of Science in
              MIS and A.A.S in Software Development and Web Technologies, along
              with experience as a web designer and business consultant; I enjoy
              working with others on helping them overcome technological
              barriers to create competitive advantages.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
