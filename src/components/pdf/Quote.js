import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { styles } from "./QuoteStyle"

const refId = "#" + new Date().toISOString().split('T')[0].slice(2, 10).replaceAll("-", "") + 
            new Date().toISOString().split('T')[1].split('.')[0].slice(3, 8).replaceAll(":", "") + "-Q";

export default function QuotePDF() {
    const QPDF = () => (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.header}>DEVIS</Text>
              <Text>Ref: {refId}</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      );
    return ( 
    <div>
        <div style={styles.pdfWindow}>
            <PDFViewer width="80%" height="100%">
                <QPDF />
            </PDFViewer>
        </div>
    </div>
    );
}