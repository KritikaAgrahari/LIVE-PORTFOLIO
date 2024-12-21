import { ActionIcon, Modal, ScrollArea, Tooltip } from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";
 const ResumeViewer=(props:any)=>{
    return <Modal.Root  scrollAreaComponent ={ScrollArea.Autosize} size="auto" className="font-mono" opened={props.opened} onClose={props.close}>
    <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
    <Modal.Content className="!rounded-3xl">
      <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl" >
        <Modal.Title data-autofocus className="!text-4xl flex gap-3 items-center !font-bold" style={{ color: '#48CAE4' }}>Resume
          <Tooltip label="Download"   className ="!text-bgColor" color="#03045E" position="right" offset={5}>
          <ActionIcon className="text-primaryColor" component ="a" href="/Kritika Resume.pdf" download={Info.name} variant="outline"  color="#03045E" >
            <IconArrowBigDownLineFilled />
          </ActionIcon>
          </Tooltip>
        </Modal.Title>
        <Modal.CloseButton  size="md" iconSize="30px"   className="!bg-bgColor " style={{ color: 'red' }}/>
        </Modal.Header>
      <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">  
        <Document file ="/Kritika Resume.pdf">
        <Page pageNumber={1}  renderTextLayer={false}  renderAnnotationLayer={false} />
        </Document> 
      </Modal.Body>
    </Modal.Content>
  </Modal.Root>
}
export default ResumeViewer;
