import { h, Fragment } from "preact";

export default props => (
  <div>
    <div class="bg-gray-900">
      <div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-base leading-6 font-semibold text-teal-400 tracking-wide uppercase">
            Rust
          </h1>
          <p class="mt-1 text-4xl leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Field Guide
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-400">
            A language empowering everyone to build reliable and efficient
            software.
          </p>
        </div>
      </div>
    </div>
    <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div class="relative">
          <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Safer, faster programs
          </h3>
          <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
            Rust’s industry-grade tools make collaboration fearless, allowing
            teams to focus on the tasks that matter.
          </p>
        </div>

        <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="relative">
            <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Automation
            </h4>
            <p class="mt-3 text-lg leading-7 text-gray-500">
              Focus on the code that matters, leaving debates about semicolons
              in the past.
            </p>

            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* <!-- Heroicon name: globe-alt --> */}
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium text-gray-900">
                      Rustfmt
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Rustfmt automatically formats Rust code, making it easier
                      to read, write, and maintain. And most importantly: never
                      debate spacing or brace position ever again.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* <!-- Heroicon name: scale --> */}
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium text-gray-900">
                      Clippy
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Clippy builds on top of the Rust compiler to help you
                      write more idomatic and efficient code.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* <!-- Heroicon name: lightning-bolt --> */}
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium text-gray-900">
                      Cargo Doc
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Documentation tooling built-in to the cargo package
                      manager removes the barriers to writing and shipping
                      documentation.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0">
            <svg
              class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              class="relative mx-auto"
              width="490"
              src="/rust-clippy-example.png"
              alt=""
            />
          </div>
        </div>

        <svg
          class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div class="relative mt-12 sm:mt-16 lg:mt-24">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2">
              <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Rustlings
              </h4>
              <p class="mt-3 text-lg leading-7 text-gray-500">
                Take a guided tour of the Rust programming language from
              </p>

              <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/* <!-- Heroicon name: annotation --> */}
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Learn the basics
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Rust can be a very familiar langauge to people coming
                        from JavaScript based backgrounds. Rustlings covers what
                        you'll need to know to get up and running quickly.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/* <!-- Heroicon name: mail --> */}
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Advanced Rust
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Rustlings also touches on more advanced concepts such as
                        threading that developers in other langauges might not
                        have been familiar with before.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <ListedLinks links={rustlingsLinks} />
            </div>
          </div>
        </div>
        <Discord />
      </div>
      <Posts />
    </div>
  </div>
);

const CardGrid = ({ links }) => (
  <div class="overflow-hidden sm:rounded-md">
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {links.map(({ title, description, tag, tagHref, href }, i) => (
        <li class="bg-white shadow rounded">
          <a
            href={href}
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out h-full align-start"
          >
            <div class="px-4 py-4 flex items-center sm:px-6">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-teal-600">
                    <a href={tagHref} class="hover:underline">
                      {tag}
                    </a>
                  </p>
                  <div>
                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
              <div class="ml-5 flex-shrink-0">
                {/* <!-- Heroicon name: chevron-right --> */}
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const postCards = [
  {
    title: "Building a Rust CLI with subcommands using structopt and clap",
    description:
      "Using structopt we can derive our arguments from an enum to generate subcommands.",
    href: "/building-a-rust-cli-with-subcommands-using-structopt-and-clap",
    tag: "structopt",
    tagHref: "/garden"
  },
  {
    title: "Parsing Rust enums from JSON with Serde and tagged types",
    description:
      "JSON, being untyped, can represent multiple types in the same field. Serde can parse these into Rust enums in a few ways.",
    href: "/parsing-rust-enums-from-json-with-serde-and-tagged-types",
    tag: "Serde",
    tagHref: "/garden"
  },
  {
    title:
      "Automatically Pinning Spotify listening party messages in Discord with Serenity",
    description: "",
    href:
      "/automatically-pinning-spotify-listening-party-messages-in-discord-with-rust-and-serenity",
    tag: "discord",
    tagHref: "/garden"
  },
  {
    title: "Are functions in Rust statements or expressions?",
    description:
      "A key insight into the Rust language is what an expression is and that they return values in tail position, leading to 'implicit returns'.",
    href: "/are-functions-in-rust-statements-or-expressions",
    tag: "Rust",
    tagHref: "/garden"
  },
  {
    title:
      "On-Demand (lazy) inputs for incremental computation in salsa with file watching powered by notify in Rust",
    description:
      "The Salsa crate allows us to trigger incremental computation through input chagnes. When paired with file watching, we can trigger regeneration of derived queries through file changes.",
    href:
      "/on-demand-lazy-inputs-for-incremental-computation-in-salsa-with-file-watching-powered-by-notify-in-rust",
    tag: "salsa",
    tagHref: "/garden"
  },
  {
    title: "Checking for a minimum node version in Rust with Command",
    description:
      "Rust's Command allows us to execute subcommands and gather the output easily allowing us to do things like check for a node version when building tools for JS devs.",
    href: "/checking-for-a-minimum-node-version-in-rust-with-command",
    tag: "language",
    tagHref: "/garden"
  },

  {
    title:
      "Piping Rust code to rustfmt with configuration for shorter code examples in blog posts",
    description:
      "You can pipe code directly to rustfmt when sharing code on different platforms (or your blog) to make it more readable for other people.",
    href:
      "/piping-rust-code-to-rustfmt-with-configuration-for-shorter-code-examples-in-blog-posts",
    tag: "tooling",
    tagHref: "/garden"
  },
  {
    title: "Custom Error types with Nom 5",
    description:
      "Parsing can result in many application specific errors. Here's how to signal that when using the Nom parser-combinator library.",
    href: "/custom-error-types-with-nom-5-in-rust",
    tag: "parsing",
    tagHref: "/garden"
  },
  {
    title: "Serving HTTP over unix domain sockets with Tide",
    description:
      "When building tools for JS devs, one way we can enable users to write JS that communicates with our Rust implementations is via sockets.",
    href: "/rust-java-script-communication-over-unix-domain-sockets-with-tide",
    tag: "tide",
    tagHref: "/garden"
  },
  {
    title: "Concatenating two string slices &str in Rust",
    description:
      "Using format! to concatenate two strings is idomatic Rust, even though it's not the absolute fastest way.",
    href: "/concatenating-two-string-slices-and-str-in-rust",
    tag: "idiomatic",
    tagHref: "/garden"
  },
  {
    title: "Processing realtime tweets from twitter in Rust",
    description:
      "Using egg_mode and the tokio runtime enables us to use streams and futures to pull in and process tweets.",
    href: "/processing-realtime-tweets-from-twitter-in-rust"
  }
];
const Posts = props => (
  <Fragment>
    <div class="bg-purple-50">
      <div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-base leading-6 font-semibold text-teal-600 tracking-wide uppercase">
            Integrations
          </h1>
          <p class="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            What can you do with Rust?
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500">
            From building CLI tools to serverless functions, from parsing
            markdown to running Discord bots, Rust can handle a wide array of
            applications.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-purple-50 pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <CardGrid links={postCards} />
      </div>
    </div>
  </Fragment>
);

const discordLinks = [
  {
    title: "Separating pin and delete message permissions using Serenity",
    location: "garden",
    href:
      "/separating-pin-and-delete-message-permissions-in-discord-using-rust-and-serenity",
    tags: ["discord", "serenity"]
  },
  {
    title: "Automatically pinning Spotify listening party messages in Discord",
    location: "garden",
    href:
      "/automatically-pinning-spotify-listening-party-messages-in-discord-with-rust-and-serenity",
    tags: ["screencasts", "node.js", "dynamodb"]
  }
];
const rustlingsLinks = [
  {
    title: "Learning Rust by Working Through the Rustlings Exercises",
    location: "egghead",
    href:
      "https://egghead.io/playlists/learning-rust-by-solving-the-rustlings-exercises-a722",
    tags: ["screencasts", "language", "beginner-friendly"]
  },
  {
    title: "Referencing contiguous slices of data we don't own using range",
    location: "egghead",
    href:
      "https://egghead.io/lessons/rust-rustlings-primitive_types4-referencing-contiguous-slices-of-data-we-don-t-own-using-range?pl=learning-rust-by-solving-the-rustlings-exercises-a722",
    tags: ["slices", "range"]
  },
  {
    title:
      "Handling errors by unwrapping or early-returning with the `?` operator",
    location: "egghead",
    href:
      "https://egghead.io/lessons/rust-rustlings-errors2-handling-errors-by-unwrapping-or-early-returning-with-the-operator?pl=learning-rust-by-solving-the-rustlings-exercises-a722",
    tags: ["error-handling"]
  },
  {
    title: "Writing your first macro",
    location: "egghead",
    href:
      "https://egghead.io/lessons/rust-rustlings-macros1-writing-your-first-macro?pl=learning-rust-by-solving-the-rustlings-exercises-a722",
    tags: ["macros"]
  }
];
const swcLinks = [
  {
    title: "Compiling a single JavaScript file from Rust with swc",
    location: "garden",
    href: "/compiling-a-single-java-script-file-from-rust-with-swc",
    tags: ["toast", "swc"]
  },
  {
    title: "Enabling features in Rust crates installed from GitHub like SWC",
    location: "garden",
    href:
      "http://localhost:63916/enabling-features-in-rust-crates-installed-from-git-hub-like-swc",
    tags: "swc"
  }
];
const ListedLinks = ({ links }) => (
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul>
      {links.map(({ title, location, tags, href }, i) => (
        <li class={i != 0 ? "border-t border-gray-200" : ""}>
          <a
            href={href}
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <div class="px-4 py-4 flex items-center sm:px-6">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div class="text-sm leading-5 font-medium text-pink-600 ">
                    {title}
                    <span class="ml-1 font-normal text-gray-500">
                      in {location}
                    </span>
                  </div>
                  <div class="mt-2 flex">
                    <div class="flex items-center text-sm leading-5 text-gray-500">
                      {/* <!-- Heroicon name: calendar --> */}
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>
                        {tags.map(v => (
                          <span class="bg-transparent text-teal-700 font-semibold py-1 px-2">
                            {v}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ml-5 flex-shrink-0">
                {/* <!-- Heroicon name: chevron-right --> */}
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Discord = props => (
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          A world of possibility
        </h3>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
          Build Discord bots, Serverless HTTP APIs, CLI tools for JS developers.
        </p>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
            Discord
          </h4>
          <p class="mt-3 text-lg leading-7 text-gray-500">
            Rust's Serenity crate enables you to build async Discord bots with
            distributed tracing built-in.
          </p>

          <ul class="mt-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <!-- Heroicon name: globe-alt --> */}
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">
                    Role Based Access Control
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Group commands and restrict access to using them, or even
                    seeing them in the automated help output, using highly
                    customizable role based access control.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <!-- Heroicon name: scale --> */}
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">
                    Collectors
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Build rich user interactions by awaiting user input or
                    reactions in the middle of control flow using collector
                    streams.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {/* <!-- Heroicon name: lightning-bolt --> */}
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">
                    Command Framework
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Organize your code with the Serenity Command Framework.
                    Build async hooks to execute before every message, bucket
                    commands into rate-limited groups, and handle errors in
                    command execution.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0">
          <svg
            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <ListedLinks links={discordLinks} />
        </div>
      </div>

      <svg
        class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>
    </div>
  </div>
);