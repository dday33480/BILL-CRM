import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      fontSize: 14
    },
    header: {
        fontFamily: "Helvetica-Bold",
        fontSize: 24
    },
    pdfWindow: {
        width: "100%",
        height: "750px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  });