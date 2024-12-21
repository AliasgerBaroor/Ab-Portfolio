import { Icon, VStack } from '@chakra-ui/react';
import { Button } from '~/components/ui/button';
import { Tooltip } from "~/components/ui/tooltip";
import { VscDebugAltSmall, VscGitMerge, VscSearch, VscFiles, VscRemoteExplorer, VscExtensions, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { useState } from 'react';

const ControlTabs = [
  {
    title: "Explorer",
    icon: VscFiles,
    isActive: true,
  },
  {
    title: "Search",
    icon: VscSearch,
    isActive: false,
  },
  {
    title: "Source Control",
    icon: VscGitMerge,
    isActive: false,
  },
  {
    title: "Run & Debug",
    icon: VscDebugAltSmall,
    isActive: false,
  },
  {
    title: "Extension",
    icon: VscExtensions,
    isActive: false,
  },
  {
    title: "Remote Explorer",
    icon: VscRemoteExplorer,
    isActive: false,
  },
];

const IconTab = () => {
  const [controlTabState, setControlTabState] = useState(ControlTabs);

  const handleTabClick = (index: number) => {
    const updatedTabs = controlTabState.map((tab, i) => ({
      ...tab,
      isActive: i === index,
    }));
    setControlTabState(updatedTabs);
  };

  return (
    <VStack justifyContent="space-between" alignItems="stretch" h="100%">
      <VStack alignItems={"center"} pr={4} flexGrow={1}>
        {controlTabState.map((controlTab, index) => {
          const IconComponent = controlTab.icon;
          return (
            <Tooltip key={controlTab.title} content={controlTab.title} positioning={{ placement: "right-end" }}>
              <Button
                variant="ghost"
                backgroundColor={controlTab.isActive ? "var(--bg-lightblack)" : ""}
                style={{
                  borderLeftWidth: "2px",
                  borderLeftColor: controlTab.isActive ? "var(--color-red)" : "transparent",
                  borderLeftStyle: "solid",
                }}
                _hover={{
                  bg: "var(--bg-lightblack)",
                }}
                onClick={() => handleTabClick(index)}
              >
                <Icon size={"lg"} color={"var(--color-white)"}>
                  <IconComponent />
                </Icon>
              </Button>
            </Tooltip>
          );
        })}
      </VStack>
      <VStack>
        <Button
          variant="ghost"
          _hover={{
            bg: "var(--bg-lightblack)",
          }}
        >
          <Icon size={"lg"} color={"var(--color-white)"}>
            <VscAccount />
          </Icon>
        </Button>
        <Button
          variant="ghost"
          _hover={{
            bg: "var(--bg-lightblack)",
          }}
        >
          <Icon size={"lg"} color={"var(--color-white)"}>
            <VscSettingsGear />
          </Icon>
        </Button>
      </VStack>
    </VStack>
  );
};

export default IconTab;
