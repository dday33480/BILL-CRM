import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { styles } from "./QuoteStyle"

export default function QuotePDF() {
    const QPDF = () => (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>FACTURE</Text>
                <Text>Ref: 1234</Text>
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