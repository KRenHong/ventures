'use client';

import Navbar from "@/app/components/nav";
import { Input, Text, Button, css, Card, Collapse, Grid, Dropdown} from "@nextui-org/react";


export default function Predict() {
  return (
    <>
      <Navbar />

      <section className="py-12 px-12 mx-auto">
        <div className="px-12 max-w-7xl min-h-screen mx-auto">
          <h1 className="text-4xl font-bold mb-8">Pitch-Deck Consolidator</h1>

          <Dropdown>
            <Dropdown.Button flat className="ml-5 mb-5">Upload File</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="new">New file</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Grid.Container gap={2}>
            <Grid>
              <Collapse.Group>
                <Collapse
                  className="mb-5"
                  title="Fluxon"
                  bordered
                  subtitle="E-Commerce Platform"
                  css={{
                    background: "$gray50", // colors.pink800
                    color: "$pink100", // space[12]
                    boxShadow: "$md", // shadows.md
                    "&:hover": {
                      background: "$purple100",
                      color: "$pink800",
                    },
                    "&:active": {
                      background: "$gray200",
                    },
                    "&:focus": {
                      borderColor: "$gray400",
                    },
                  }}
                >
                  <Text className="text-2xl font-bold mb-1">
                    Summary of the StartUps
                  </Text>

                  <Text className="mb-5" color="#808080">
                    A startup or start-up is a company or project undertaken by
                    an entrepreneur to seek, develop, and validate a scalable
                    business model.[1][2] While entrepreneurship includes all
                    new businesses, including self-employment and businesses
                    that do not intend to go public, startups are new businesses
                    that intend to grow large beyond the solo founder.[3] At the
                    beginning, startups face high uncertainty[4] and have high
                    rates of failure, but a minority of them do go on to be
                    successful and influential.[5]
                  </Text>

                  <Text className="text-2xl font-bold mb-1">
                    Highlights of the StartUps
                  </Text>

                  <div className="mb-3">
                    <ul>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Top 10 among Startups
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Revenue Growth exceeds 1 million dollars{" "}
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Next Goal get IPO in Bursa Malaysia{" "}
                      </Text>
                    </ul>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/presentation/d/1ZrCXviMjzed7Chd1G3Ln35IfP4FxX8eR/edit?usp=share_link&ouid=108591630335258582046&rtpof=true&sd=true"
                      )
                    }
                    id="predictButton"
                    auto
                    shadow
                    color="gradient"
                    size="xl"
                    className="ml-3"
                    css={{
                      "&:hover": {
                        background: "$purple300",
                        color: "$pink800",
                      },
                      "&:active": {
                        background: "$purple300",
                      },
                      "&:focus": {
                        borderColor: "$pink400",
                      },
                    }}
                  >
                    Check it Out !
                  </Button>
                </Collapse>

                <Collapse
                  className="mb-5"
                  title="ThriveHive"
                  bordered
                  subtitle="Technology"
                  css={{
                    background: "$gray50", // colors.pink800
                    color: "$pink100", // space[12]
                    boxShadow: "$md", // shadows.md
                    "&:hover": {
                      background: "$purple100",
                      color: "$pink800",
                    },
                    "&:active": {
                      background: "$gray200",
                    },
                    "&:focus": {
                      borderColor: "$gray400",
                    },
                  }}
                >
                  <Text className="text-2xl font-bold mb-1">
                    Summary of the StartUps
                  </Text>

                  <Text className="mb-5" color="#808080">
                    A startup or start-up is a company or project undertaken by
                    an entrepreneur to seek, develop, and validate a scalable
                    business model.[1][2] While entrepreneurship includes all
                    new businesses, including self-employment and businesses
                    that do not intend to go public, startups are new businesses
                    that intend to grow large beyond the solo founder.[3] At the
                    beginning, startups face high uncertainty[4] and have high
                    rates of failure, but a minority of them do go on to be
                    successful and influential.[5]
                  </Text>

                  <Text className="text-2xl font-bold mb-1">
                    Highlights of the StartUps
                  </Text>

                  <div className="mb-3">
                    <ul>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Top 10 among Startups
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Revenue Growth exceeds 1 million dollars{" "}
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Next Goal get IPO in Bursa Malaysia{" "}
                      </Text>
                    </ul>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/presentation/d/1ZrCXviMjzed7Chd1G3Ln35IfP4FxX8eR/edit?usp=share_link&ouid=108591630335258582046&rtpof=true&sd=true"
                      )
                    }
                    id="predictButton"
                    auto
                    shadow
                    color="gradient"
                    size="xl"
                    className="ml-3"
                    css={{
                      "&:hover": {
                        background: "$purple300",
                        color: "$pink800",
                      },
                      "&:active": {
                        background: "$purple300",
                      },
                      "&:focus": {
                        borderColor: "$pink400",
                      },
                    }}
                  >
                    Check it Out !
                  </Button>
                </Collapse>

                <Collapse
                  className="mb-5"
                  title="BluewaveAI"
                  bordered
                  subtitle="Technology"
                  css={{
                    background: "$gray50", // colors.pink800
                    color: "$pink100", // space[12]
                    boxShadow: "$md", // shadows.md
                    "&:hover": {
                      background: "$purple100",
                      color: "$pink800",
                    },
                    "&:active": {
                      background: "$gray200",
                    },
                    "&:focus": {
                      borderColor: "$gray400",
                    },
                  }}
                >
                  <Text className="text-2xl font-bold mb-1">
                    Summary of the StartUps
                  </Text>

                  <Text className="mb-5" color="#808080">
                    A startup or start-up is a company or project undertaken by
                    an entrepreneur to seek, develop, and validate a scalable
                    business model.[1][2] While entrepreneurship includes all
                    new businesses, including self-employment and businesses
                    that do not intend to go public, startups are new businesses
                    that intend to grow large beyond the solo founder.[3] At the
                    beginning, startups face high uncertainty[4] and have high
                    rates of failure, but a minority of them do go on to be
                    successful and influential.[5]
                  </Text>

                  <Text className="text-2xl font-bold mb-1">
                    Highlights of the StartUps
                  </Text>

                  <div className="mb-3">
                    <ul>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Top 10 among Startups
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Revenue Growth exceeds 1 million dollars{" "}
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Next Goal get IPO in Bursa Malaysia{" "}
                      </Text>
                    </ul>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/presentation/d/1ZrCXviMjzed7Chd1G3Ln35IfP4FxX8eR/edit?usp=share_link&ouid=108591630335258582046&rtpof=true&sd=true"
                      )
                    }
                    id="predictButton"
                    auto
                    shadow
                    color="gradient"
                    size="xl"
                    className="ml-3"
                    css={{
                      "&:hover": {
                        background: "$purple300",
                        color: "$pink800",
                      },
                      "&:active": {
                        background: "$purple300",
                      },
                      "&:focus": {
                        borderColor: "$pink400",
                      },
                    }}
                  >
                    Check it Out !
                  </Button>
                </Collapse>

                <Collapse
                  className="mb-5"
                  title="NextElevate"
                  bordered
                  subtitle="Healthcare"
                  css={{
                    background: "$gray50", // colors.pink800
                    color: "$pink100", // space[12]
                    boxShadow: "$md", // shadows.md
                    "&:hover": {
                      background: "$purple100",
                      color: "$pink800",
                    },
                    "&:active": {
                      background: "$gray200",
                    },
                    "&:focus": {
                      borderColor: "$gray400",
                    },
                  }}
                >
                  <Text className="text-2xl font-bold mb-1">
                    Summary of the StartUps
                  </Text>

                  <Text className="mb-5" color="#808080">
                    A startup or start-up is a company or project undertaken by
                    an entrepreneur to seek, develop, and validate a scalable
                    business model.[1][2] While entrepreneurship includes all
                    new businesses, including self-employment and businesses
                    that do not intend to go public, startups are new businesses
                    that intend to grow large beyond the solo founder.[3] At the
                    beginning, startups face high uncertainty[4] and have high
                    rates of failure, but a minority of them do go on to be
                    successful and influential.[5]
                  </Text>

                  <Text className="text-2xl font-bold mb-1">
                    Highlights of the StartUps
                  </Text>

                  <div className="mb-3">
                    <ul>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Top 10 among Startups
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Revenue Growth exceeds 1 million dollars{" "}
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Next Goal get IPO in Bursa Malaysia{" "}
                      </Text>
                    </ul>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/presentation/d/1ZrCXviMjzed7Chd1G3Ln35IfP4FxX8eR/edit?usp=share_link&ouid=108591630335258582046&rtpof=true&sd=true"
                      )
                    }
                    id="predictButton"
                    auto
                    shadow
                    color="gradient"
                    size="xl"
                    className="ml-3"
                    css={{
                      "&:hover": {
                        background: "$purple300",
                        color: "$pink800",
                      },
                      "&:active": {
                        background: "$purple300",
                      },
                      "&:focus": {
                        borderColor: "$pink400",
                      },
                    }}
                  >
                    Check it Out !
                  </Button>
                </Collapse>

                <Collapse
                  className="mb-5"
                  title="Swiftrise"
                  bordered
                  subtitle="E-Commerce Platform"
                  css={{
                    background: "$gray50", // colors.pink800
                    color: "$pink100", // space[12]
                    boxShadow: "$md", // shadows.md
                    "&:hover": {
                      background: "$purple100",
                      color: "$pink800",
                    },
                    "&:active": {
                      background: "$gray200",
                    },
                    "&:focus": {
                      borderColor: "$gray400",
                    },
                  }}
                >
                  <Text className="text-2xl font-bold mb-1">
                    Summary of the StartUps
                  </Text>

                  <Text className="mb-5" color="#808080">
                    A startup or start-up is a company or project undertaken by
                    an entrepreneur to seek, develop, and validate a scalable
                    business model.[1][2] While entrepreneurship includes all
                    new businesses, including self-employment and businesses
                    that do not intend to go public, startups are new businesses
                    that intend to grow large beyond the solo founder.[3] At the
                    beginning, startups face high uncertainty[4] and have high
                    rates of failure, but a minority of them do go on to be
                    successful and influential.[5]
                  </Text>

                  <Text className="text-2xl font-bold mb-1">
                    Highlights of the StartUps
                  </Text>

                  <div className="mb-3">
                    <ul>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Top 10 among Startups
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Revenue Growth exceeds 1 million dollars{" "}
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Next Goal get IPO in Bursa Malaysia{" "}
                      </Text>
                    </ul>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/presentation/d/1ZrCXviMjzed7Chd1G3Ln35IfP4FxX8eR/edit?usp=share_link&ouid=108591630335258582046&rtpof=true&sd=true"
                      )
                    }
                    id="predictButton"
                    auto
                    shadow
                    color="gradient"
                    size="xl"
                    className="ml-3"
                    css={{
                      "&:hover": {
                        background: "$purple300",
                        color: "$pink800",
                      },
                      "&:active": {
                        background: "$purple300",
                      },
                      "&:focus": {
                        borderColor: "$pink400",
                      },
                    }}
                  >
                    Check it Out !
                  </Button>
                </Collapse>

                <Collapse
                  className="mb-5"
                  title="VeloTech"
                  bordered
                  subtitle="E-Commerce Platform"
                  css={{
                    background: "$gray50", // colors.pink800
                    color: "$pink100", // space[12]
                    boxShadow: "$md", // shadows.md
                    "&:hover": {
                      background: "$purple100",
                      color: "$pink800",
                    },
                    "&:active": {
                      background: "$gray200",
                    },
                    "&:focus": {
                      borderColor: "$gray400",
                    },
                  }}
                >
                  <Text className="text-2xl font-bold mb-1">
                    Summary of the StartUps
                  </Text>

                  <Text className="mb-5" color="#808080">
                    A startup or start-up is a company or project undertaken by
                    an entrepreneur to seek, develop, and validate a scalable
                    business model.[1][2] While entrepreneurship includes all
                    new businesses, including self-employment and businesses
                    that do not intend to go public, startups are new businesses
                    that intend to grow large beyond the solo founder.[3] At the
                    beginning, startups face high uncertainty[4] and have high
                    rates of failure, but a minority of them do go on to be
                    successful and influential.[5]
                  </Text>

                  <Text className="text-2xl font-bold mb-1">
                    Highlights of the StartUps
                  </Text>

                  <div className="mb-3">
                    <ul>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Top 10 among Startups
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Revenue Growth exceeds 1 million dollars{" "}
                      </Text>
                      <Text color="#808080" className="ml-3 mb-2">
                        - Next Goal get IPO in Bursa Malaysia{" "}
                      </Text>
                    </ul>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/presentation/d/1ZrCXviMjzed7Chd1G3Ln35IfP4FxX8eR/edit?usp=share_link&ouid=108591630335258582046&rtpof=true&sd=true"
                      )
                    }
                    id="predictButton"
                    auto
                    shadow
                    color="gradient"
                    size="xl"
                    className="ml-3"
                    css={{
                      "&:hover": {
                        background: "$purple300",
                        color: "$pink800",
                      },
                      "&:active": {
                        background: "$purple300",
                      },
                      "&:focus": {
                        borderColor: "$pink400",
                      },
                    }}
                  >
                    Check it Out !
                  </Button>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </div>
      </section>
    </>
  );
}
