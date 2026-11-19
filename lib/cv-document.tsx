import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: "Helvetica", fontSize: 10, color: "#252422" },
  header: { borderBottom: "2px solid #eb5e28", paddingBottom: 12, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: "bold" },
  title: { fontSize: 12, color: "#eb5e28", marginTop: 4 },
  section: { marginTop: 16 },
  sectionTitle: { fontSize: 13, fontWeight: "bold", marginBottom: 8, color: "#403d39" },
  item: { marginBottom: 10 },
  itemTitle: { fontSize: 11, fontWeight: "bold" },
  itemSub: { fontSize: 10, color: "#666" },
  text: { fontSize: 10, marginTop: 2, lineHeight: 1.4 },
});

export function CVDocument({ data }: { data: any }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumen</Text>
          <Text style={styles.text}>{data.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia</Text>
          {data.experience.map((e: any) => (
            <View key={e.company} style={styles.item}>
              <Text style={styles.itemTitle}>{e.role}</Text>
              <Text style={styles.itemSub}>{e.company} · {e.period}</Text>
              <Text style={styles.text}>{e.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <Text style={styles.text}>{data.skills.join(" · ")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contacto</Text>
          <Text style={styles.text}>Instagram: {data.instagram}</Text>
        </View>
      </Page>
    </Document>
  );
}