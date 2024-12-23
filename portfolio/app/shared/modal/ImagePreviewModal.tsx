import { AspectRatio } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import exampleImg from "~/assets/images/example.png"
const ImagePreviewModal = ({ children } : { children: React.ReactNode }) => {
  return (
    <DialogRoot placement="center">
      <DialogTrigger asChild>
        { children }
      </DialogTrigger>
      <DialogContent>
        <DialogBody pt="4">
          <DialogTitle color={"var(--color-blue)"} pb={2}>Example</DialogTitle>
          <AspectRatio ratio={4 / 3} rounded="lg" overflow="hidden">
            <img
              src={exampleImg}
              alt="Preview"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </AspectRatio>
        </DialogBody>
        <DialogCloseTrigger top="0" insetEnd="-12" bg="bg" />
      </DialogContent>
    </DialogRoot>
  );
};

export default ImagePreviewModal;
