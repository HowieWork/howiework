---
category: 'design'
title: 'Museum'
slug: 'museum'
date: 'Jan 1, 2020'
duration: '14 min read'
keywords: ['UI/UX', 'App', 'Design', 'Museum']
excerpt: 'I have been working on a museum app during the past month. This post documents the working process from research to wireframming to prototyping in great detail.'
isFeatured: false
imageSrc: '../../howiework/assets/post/image/museum/cover.webp'
readMoreUrl: 'posts/museum'
---

_Over the past month, I have been working on a museum app redesign for the Natinal Museum of African American History and Culture (aka. NMAAHC). This post documents the working process from research to wireframming to prototyping. It focuses on the research part explaining why I made certain design decisions in detail._

**UPDATE 12/31/2021:** Review original post and make some narrating and formatting changes.

## Intro

Project is a mobile app redesign for NMAAHC. The goal is to enhance visitors' museum experience. This is an unsolicited project. The views from it are my own. I am not affiliated with NMAAHC in any capacity.

## Background and challenges

### 1. Two challenges

(1) Meet current app's prospects:

- A complement to your onsite museum experience
- A way to discover stories found in our collection
- An integration of multiple features to enhance your museum experience

(2) More broadly, this app should reflect the museum's own vision - 'the Four Pillars':

- Explore history through interactive exhibitions
- See Americans' stories through the globe lens
- Share American values like resiliency, optimism, and spirituality
- Engage new audiences outside DC area.

### 2. Defining scope of the work

I planned four weeks to finish this project: one week for research; one week for design; the rest if for prototype and testing. Final package will also include one app poster for marketing.

### 3. Understanding users

First, let's take a look at how the current app performs. Statistics from the App Store/Google Play (until Jan 14, 2020): App store - total 42 people reviewed, 12 left comments. Average rating is 3.9/5.0; Google play - total 148 people reviewed, 55 left comments. Average rating is 4.4/5.0.

**"Museum is a must-see"** is mentioned 7 times. The **audio feature** is appreciated by 4 users. One user mentioned the bad quality of the audio feature. **"Helpful to plan a visit"** was mentioned 4 times. **"Content takes a long time to load"** was mentioned 3 times. 10 users expressed their pride in their history and culture. Among a total of 13 users who rated one star, 12 of them stated **"the app didn't work"**.

During a weekend, I interviewed 31 visitors. Below are main discoveries:

(1) **Top 3 reasons of choosing the app**: "The audio feature is very helpful. I can listen while visiting"; "Search and find things I am truly interested in (e.g. exhibition). So I can plan my visit while waiting in line"; "Handy information about upcoming exhibits, museum hours and speaker series".

(2) **Top 3 reasons of not choosing the app**: "I don't know its existence"; "I grabbed a map from the reception area and that is enough for me"; "Download the app is time-consuming".

(3) **App features popularity ranking**: Audio, Explore (exhibitions, tours, and events), Interaction, Search, Share, Map, General Information (museum, café and gift shop), Inclusiveness (language and larger text).

(4) **Content I wish could see**: Incorporate more content from the museum's collection; Recent events and news; Images of food Sweet home café provided; Exact price information of food, not just price range; Images of gifts museum shop provided.

(5) **Feature I wish could exist**: More interactive map, not just zoom in/out; A more intuitive interaction system comparing to the current "Reaction" system; A feature can customize my visit according to my interest; Create a community for history museum lovers.

## Personas

### 1. Persona types

Based on behavioral variables, three types of visitors are hypothesized as following:

(1) **Primary**: visitors use the app throughout their visit and believe the necessity and rationality of its existence, though they might feel odd while using it.

(2) **Secondary**: visitors are willing to try the app but they give up after using it for a while.

(3) **Negative**: visitors don't think a mobile app would enhance their museum experience or show no interest at all.

### 2. Personas and their stories

**Primary - Chris**

- **Bio**: 43; Theatre manager in DC.
- **Attributes**: Work in a mid-sized local theatre for more than 10 years; Appreciate rapid change of technology and how it affects daily life; Visionary and willing to try new technology; Love visiting museum in DC; Detail-oriented, organized and focus on the life quality.
- **Goals**: Use app to plan his visit ahead; Get museum special exhibitions, events and tours notification; Share his memories to other medium.

![user jouney chris](../../howiework/assets/post/image/museum/chris-story.webp)
**User journey - Chris**

**Primary - Alex**

- **Bio**: 24; Graduate student from Seattle.
- **Attributes**: Major in education and history; Love technology and dedicate his efforts to combine his profession and technology in the future; Adventurous and love travelling; Social and proactive in community.
- **Goals**: Enhance his museum experience not limited to a comprehensive understanding of history through multiple mediums; Find like-minded people through the app.

![user journey alex](../../howiework/assets/post/image/museum/alex-story.webp)
**User journey - Alex**

**Secondary - Jennifer**

- **Bio**: 35; Housewife living in Toronto.
- **Attributes**: Spend most of her time taking care of her kids; Not interested in technology but care about how technology is shaping education; Explore local museums is always on her to-do-list while travelling; Thoughtful and plan things ahead of time.

**Negative - Earl**

- **Bio**: 52; Veteran living in Philadelphia currently works as a librarian.
- **Attributes**: Has been working for a community library since he was discharged; Not interested in technology at all.

### 3. Results

Personas and their stories put me in users' shoes and help me to understand their experience with the app. Here are some results:

(1) Four experience principles:

- **Be Substantial**
  - Cover the museum's exhibitions, events and tours comprehensively
  - Integrate various practical functions intellectually
  - Provide users with general information including café and gift shop.
- **Be Simple**
  - Assist users in navigating through the museum easily
  - Let users find their interests effectively
  - Provide language options and larger text inclusively
- **Be Personalized**
  - Define a personalized system based on users' needs
  - Let users create profiles, reserve weekend passes, add their interests and history
- **Create a sense of community**
  - Build a platform of expressing own feelings and hearing others' thoughts
  - Open up a new channel to outside community for sharing values and engaging new audiences.

(2) Key attributes: Audio, Explore, Search, Map, Interaction ("Reaction" system), Information, Inclusiveness, Community (profile, interests and share).

## User flow

### 1. Information architecture

App features on museum's official website and mobile app appear to be different. Sketch below contains current common features and my comments about revising some features.

![ia sketch before](../../howiework/assets/post/image/museum/ia-sketch-before.webp)
**Information architecture (before)**

Information architecture sketch after revising:

![ia sketch after](../../howiework/assets/post/image/museum/ia-sketch-after.webp)
**Information architecture (after)**

### 2. Alex's user flow

User Flow below is based on Alex's story. It depicts main actions new users need to take when they first use this app. It helps me to identify the key screens, which need to be focused on for the next design phase.

![user-flow](../../howiework/assets/post/image/museum/user-flow.webp)
**User flow**

## Wireframes

![wireframe ideation](../../howiework/assets/post/image/museum/wireframe-ideation.webp)
**Wireframe ideation**

### 1. Home & menu

Guides: Main features should be clear and visible; Navigation can be easily done by one hand; Interface layout needs to be simple.

Menu is substantial and concise; For each submenu, content should be tailored appropriately and shown clearly; Icons are easily understood ; Users' goals should be easily fulfilled by one hand.

![home menu wireframe before 1](../../howiework/assets/post/image/museum/home-menu-before-1.png)
![home menu wireframe before 2](../../howiework/assets/post/image/museum/home-menu-before-2.png)
![home menu wireframe after 1](../../howiework/assets/post/image/museum/home-menu-after-1.png)
![home menu wireframe after 2](../../howiework/assets/post/image/museum/home-menu-after-2.png)
**Wireframe before (left 2) and after**

Animated home and menu: [before ↗](../../howiework/assets/post/image/museum/home-menu-before.gif) | [after ↗](../../howiework/assets/post/image/museum/home-menu-after.gif)

### 2. Search & map

Guides: Provide suggestions for users' search; Suggestions should be categorized based on museum's content.

Maps need to be simple and accurate; Easily zoom in/out; Show marks when profiled users add things to their "Liked".

![search map wireframe before 1](../../howiework/assets/post/image/museum/search-map-before-1.png)
![search map wireframe before 2](../../howiework/assets/post/image/museum/search-map-before-2.png)
![search map wireframe after 1](../../howiework/assets/post/image/museum/search-map-after-1.png)
![search map wireframe after 2](../../howiework/assets/post/image/museum/search-map-after-2.png)
**Wireframe before (left 2) and after**

Animated search map: [before ↗](../../howiework/assets/post/image/museum/search-map-before.gif) | [after ↗](../../howiework/assets/post/image/museum/search-map-after.gif)

### 3. Explore

Guides: Categories are shown orderly; Each artwork shows location, brief, audio (if it has) and "like/share"; Simple interface and easy navigation.

![explore after wireframe before 1](../../howiework/assets/post/image/museum/explore-before-1.png)
![explore after wireframe before 2](../../howiework/assets/post/image/museum/explore-before-2.png)
![explore after wireframe after 1](../../howiework/assets/post/image/museum/explore-after-1.png)
![explore after wireframe after 2](../../howiework/assets/post/image/museum/explore-after-2.png)
**Wireframe before (left 2) and after**

Animated explore: [before ↗](../../howiework/assets/post/image/museum/explore-before.gif) | [after ↗](../../howiework/assets/post/image/museum/explore-after.gif)

### 4. Welcome

Guides: Let users decide whether they want to join the community; Provide multiple ways of signing up; Assist users in creating their profile step by step; Reflect the characteristics of the museum.

![welcome wireframe 1](../../howiework/assets/post/image/museum/welcome-1.png)
![welcome wireframe 2](../../howiework/assets/post/image/museum/welcome-2.png)
![welcome wireframe 3](../../howiework/assets/post/image/museum/welcome-3.png)
![welcome wireframe 4](../../howiework/assets/post/image/museum/welcome-4.png)
**Wireframe**

[Animated welcome ↗](../../howiework/assets/post/image/museum/welcome.gif)

### 5. Profile

Guides: Direct users to Welcome section if they haven't signed up; Information is shown clearly and orderly; Easily retrieve history for users; Provide access to get help and submit feedback; Enhance personal experience by community feature; Connect to a larger community.

![profile wireframe 1](../../howiework/assets/post/image/museum/profile-1.png)
![profile wireframe 2](../../howiework/assets/post/image/museum/profile-2.png)
![profile wireframe 3](../../howiework/assets/post/image/museum/profile-3.png)
![profile wireframe 4](../../howiework/assets/post/image/museum/profile-4.png)
**Wireframe**

[Animated profile ↗](../../howiework/assets/post/image/museum/profile.gif)

## Prototyping

### 1. Design system

![design system](../../howiework/assets/post/image/museum/design-system.png)
**Design system**

### 2. UI elements and basic interactions

![ui elements](../../howiework/assets/post/image/museum/ui-elements.png)
**UI elements**

![interaction 1](../../howiework/assets/post/image/museum/interaction-1.gif)
![interaction 2](../../howiework/assets/post/image/museum/interaction-2.gif)
![interaction 3](../../howiework/assets/post/image/museum/interaction-3.gif)
**Interaction examples**

### 3. Prototype

![welcome prototype 1](../../howiework/assets/post/image/museum/welcome-prototype-1.png)
![welcome prototype 2](../../howiework/assets/post/image/museum/welcome-prototype-2.png)
![welcome prototype 3](../../howiework/assets/post/image/museum/welcome-prototype-3.png)
![welcome prototype 4](../../howiework/assets/post/image/museum/welcome-prototype-4.png)
**Welcome**

[Animated welcome ↗](../../howiework/assets/post/image/museum/welcome-prototype.gif)

![home and menu prototype 1](../../howiework/assets/post/image/museum/home-menu-prototype-1.png)
![home and menu prototype 2](../../howiework/assets/post/image/museum/home-menu-prototype-2.png)
![home and menu prototype 3](../../howiework/assets/post/image/museum/home-menu-prototype-3.png)
![home and menu prototype 4](../../howiework/assets/post/image/museum/home-menu-prototype-4.png)
**Home and menu**

[Animated home and menu ↗](../../howiework/assets/post/image/museum/home-menu-prototype.gif)

![search and map prototype 1](../../howiework/assets/post/image/museum/search-map-prototype-1.png)
![search and map prototype 2](../../howiework/assets/post/image/museum/search-map-prototype-2.png)
![search and map prototype 3](../../howiework/assets/post/image/museum/search-map-prototype-3.png)
![search and map prototype 4](../../howiework/assets/post/image/museum/search-map-prototype-4.png)
**Search and map**

[Animated search and map ↗](../../howiework/assets/post/image/museum/search-map-prototype.gif)

![explore prototype 1](../../howiework/assets/post/image/museum/explore-prototype-1.png)
![explore prototype 2](../../howiework/assets/post/image/museum/explore-prototype-2.png)
![explore prototype 3](../../howiework/assets/post/image/museum/explore-prototype-3.png)
![explore prototype 4](../../howiework/assets/post/image/museum/explore-prototype-4.png)
**Explore**

[Animated explore ↗](../../howiework/assets/post/image/museum/explore-prototype.gif)

![profile and community prototype 1](../../howiework/assets/post/image/museum/profile-community-prototype-1.png)
![profile and community prototype 2](../../howiework/assets/post/image/museum/profile-community-prototype-2.png)
![profile and community prototype 3](../../howiework/assets/post/image/museum/profile-community-prototype-3.png)
![profile and community prototype 4](../../howiework/assets/post/image/museum/profile-community-prototype-4.png)
**Profile**

[Animated profile and community ↗](../../howiework/assets/post/image/museum/profile-community-prototype.gif)

## Reflections

Looking back the whole progress, here are some key takeaways:

- Stick with users. Most of the hard problems could be solved.
- Keep tracking your working progress.
- Plan ahead. The actual process may take more time than you thought.
- A "big" deadline is not enough. Set a "small" deadline for each design phase.
- Keep in mind: simple, functional, then beautiful.
