This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# What is CMS?

A **CMS (Content Management System)** is a software application that allows users to create, manage, and modify digital content without requiring extensive technical knowledge. It provides an interface for managing website or app content, making it easy for non-developers to update text, images, videos, and other elements.

# Types of CMS:

**1. Traditional CMS (Coupled CMS)**

Backend and frontend are tightly integrated.
Example: WordPress, Drupal, Joomla
Best for websites where content and presentation are managed together.

**2. Headless CMS**

The backend (content storage) is separate from the frontend (presentation layer).
Content is delivered via APIs (REST, GraphQL) to any frontend (web, mobile, IoT).
Example: AEM, Contentful, Strapi, Sanity
Best for mobile apps, SPAs, and multi-platform content delivery.

**3. Decoupled CMS**

The backend is separate but provides an optional frontend rendering system.
A hybrid approach between traditional and headless CMS.

# Why Use a CMS?

✅ Easy content management – No need for coding knowledge.

✅ Faster updates – Modify content without redeploying an app.

✅ Multichannel support – Deliver content across web, mobile, and other platforms.

✅ Collaboration – Multiple users can manage content with role-based access.

# CMS in React Native

For React Native, Headless CMS is commonly used since mobile apps need content via APIs. 

Examples:

- AEM (Adobe Experience Manager)

- Contentful

- Strapi

- Sanity

- Firebase Firestore (as a lightweight CMS)

# AEM as headless CMS

AEM (Adobe Experience Manager) as a headless CMS allows React Native applications to fetch and display content dynamically from AEM without being tightly coupled to its frontend. Instead of rendering pages on the server, AEM exposes content through APIs (like REST or GraphQL), which can be consumed by mobile or web applications.

# Key Features of AEM as Headless CMS in React Native:

### **Content Delivery via API:**

AEM provides RESTful and GraphQL APIs to fetch content.

React Native apps can request structured content dynamically.

### **Component-Based Content Management:**

Content authors can manage text, images, and other assets in AEM.

The React Native app retrieves and renders this content.

### **Omnichannel Support:**

AEM’s headless architecture allows content reuse across multiple platforms (web, mobile, IoT).

### **GraphQL for Optimized Queries:**

AEM’s GraphQL API allows fetching only the required data, improving performance.


# How to Use AEM in React Native?

1. Set up AEM’s Content Fragment Model:

Define content fragments (e.g., articles, banners, product details).

2. Expose APIs:

Enable AEM’s Content Services to expose structured content via REST or GraphQL.

3. Fetch Content in React Native:

```sh
fetch('https://your-aem-instance/content/my-api.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

4. Render Content Dynamically:

Use React Native components to display images, text, and videos fetched from AEM.

# Why Use AEM as Headless for React Native?

- Centralized content management
- Seamless integration with Adobe ecosystem
- Flexible frontend choices
- Improved performance with GraphQL


## Congratulations! :tada:

You've successfully learn what is CMS and how to acheive CMS using AEM:


