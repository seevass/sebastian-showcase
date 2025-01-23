import "./Quickcast.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";


function Quickcast() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Quickcast
          </Title>
          <Text className='textdescription subpagetext'>
            Taking heavy inspiration from the magic of the Harry Potter series and the rise of a new genre of roguelikes, Quickcast is a shoot 'em up roguelite where you prepare you magic by drawing them! Survive as long as possible by trying to combine different spells into something new. As the sole developer of this game, I was responsible for every aspect of it.
          </Text>
        </Group>
        <Space h="xl"/>
        <Group
          justify="center"
          gap={"xl"}
        >
        <Image src={images.about1} h={"auto"} w="30vw"/>
        <Image src={images.about3} h={"auto"} w="30vw"/>
        <Image src={images.about2} h={"auto"} w="30vw"/>
        </Group>
        <Space h="xl"/>
        <Space h="xl"/>
      </AppShellMain>


      <AppShellFooter className="foot subpagetext">
        <NavLink 
          className="homelink"
          href="#welcomehome"
          label="Home sweet home!"
          style={{justifyContent: "flex-start"}}
        />
      </AppShellFooter>
    </AppShell>
  );
}

export default Quickcast;