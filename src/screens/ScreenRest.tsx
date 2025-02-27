import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getCMSContent } from '../services/AEMService';

type ContentItem = {
  id: number;
  title: string;
  body: string;
};

const ScreenRest = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCMSData();
  }, []);

  const fetchCMSData = async () => {
    const data = await getCMSContent();
    setContent(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CMS Content</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={content}
          keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }: { item: ContentItem }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { padding: 15, backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, elevation: 3 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  body: { fontSize: 14, color: '#666', marginTop: 5 },
});

export default ScreenRest;
