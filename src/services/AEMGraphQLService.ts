export const getCMSContent = async () => {
    const query = `
      {
        posts {
          data {
            id
            title
            body
          }
        }
      }
    `;
  
    try {
      const response = await fetch('https://graphqlzero.almansi.me/api', {
        method: 'POST', // ✅ Use POST for GraphQL
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      const result = await response.json();
      return result.data.posts.data;
    } catch (error) {
      console.error('Error fetching CMS content:', error);
      return [];
    }
  };
  