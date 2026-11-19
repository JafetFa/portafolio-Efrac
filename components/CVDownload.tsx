"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CVDocument } from "@/lib/cv-document";
import { cvData } from "@/lib/cv-data";

// Importación dinámica: esto evita que PDFDownloadLink se ejecute en el servidor
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <Button size="lg" variant="outline" disabled>
        <Download className="mr-2 h-5 w-5" />
        Cargando CV...
      </Button>
    ),
  }
);

export function CVDownload() {
  return (
    <PDFDownloadLink
      document={<CVDocument data={cvData} />}
      fileName="CV-Jafet-Farias.pdf"
    >
      {({ loading }) => (
        <Button size="lg" variant="outline" disabled={loading}>
          <Download className="mr-2 h-5 w-5" />
          {loading ? "Generando..." : "Descargar CV"}
        </Button>
      )}
    </PDFDownloadLink>
  );
}