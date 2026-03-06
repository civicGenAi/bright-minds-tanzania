import annualReportImg from "@/assets/annual-report.png";
import talentShowImg from "@/assets/talent-show.jpg";
import awarenessRunImg from "@/assets/awareness-run.jpg";

export interface Project {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
    likes: number;
    commentsCount: number;
    status?: string;
    registrationLink?: string;
    impactLabel?: string;
    impactValue?: number;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "DYSLEXIA AWARENESS RUN",
        excerpt: "Join us for a 5km/10km run to raise awareness about dyslexia and promote inclusivity.",
        content: `Dyslexia Tanzania plan to have a 5 Kilometer and a 10 Kilometer dyslexia awareness run, which will be held on 6th October 2024 from 6:00am.

This event aims at raising awareness about dyslexia and promote inclusivity by bringing together the community for a fun and engaging event. This run will highlight the importance of understanding and supporting individuals with dyslexia.

The registration fee is 35,000/= Tanzanian Shillings, that will cover your package:
- T shirt
- Bip Number
- Medal and other impactful information about Dyslexia.

On this link below is where you can register for your attendance at the Dyslexia Awareness Run.
https://show.forms.app/form/6666d45d44ef84c00884a370?

We call upon for Sponsors to support us for a successful Event. By joining us in making a difference, your involvement helps to raise awareness and promotes inclusivity for those with learning challenges. Together, we can create a more understanding and supportive community, making a lasting impact for all.

We welcome you all, to support us by attending or Sponsoring the Dyslexia Awareness Run.
Thank you in advance for being part of the impact we bring in our community.`,
        date: "Oct 6, 2024",
        category: "Awareness",
        image: awarenessRunImg,
        readTime: "5 min",
        likes: 342,
        commentsCount: 28,
        status: "Passed Event",
        registrationLink: "https://show.forms.app/form/6666d45d44ef84c00884a370?",
        impactLabel: "Participants",
        impactValue: 500
    },
    {
        id: 2,
        title: "TALENT SHOW DINNER",
        excerpt: "Discover hidden talents and incredible abilities at the Dyslexia Awareness Talent Show.",
        content: `Discover the hidden talents and incredible abilities of individuals with learning challenges and also performance from the general public at Dyslexia Awareness Talent Show.
Which will be held at Corridor Spring Hotel on 13th October 2024 from 6:00pm to 9:00pm.

This special event is not just about showcasing talents, it's about breaking barriers, celebrating diversity and promoting a message of inclusivity. Join us for an evening of inspiration, creativity, and empowerment, where we prove that everyone has something amazing to offer, regardless of their differences.

Our tickets for the dinner go for 100,000/= Tanzanian shillings.

Here is the link for registration: https://show.forms.app/form/6666d45d44ef84c00884a370?

We invite sponsors to support this meaningful event and help us amplify our impact. Your partnership will directly contribute to creating a more inclusive community. To the public, come and be inspired. Your attendance will show solidarity and support for a cause that truly matters.

Together, let's celebrate and empower every individual.`,
        date: "Oct 13, 2024",
        category: "Empowerment",
        image: talentShowImg,
        readTime: "4 min",
        likes: 285,
        commentsCount: 15,
        status: "Passed Event",
        registrationLink: "https://show.forms.app/form/6666d45d44ef84c00884a370?",
        impactLabel: "Performers",
        impactValue: 120
    },
    {
        id: 3,
        title: "IMPACT REPORT 2023",
        excerpt: "A comprehensive look at Dyslexia Tanzania's activities, programs, and outreach in 2023.",
        content: `This report presents the activities and findings for Dyslexia Tanzania for the year 2023. It includes data on various programs, performance indicators, and outcomes.

### Key Activities and Programs
Throughout 2023, Dyslexia Tanzania conducted several workshops, self awareness talk and media interviews to raise awareness about dyslexia and related conditions such as ADHD and autism.

#### Workshops
- **May 2023:** Workshop at The Tanganyika Junior School, focusing on awareness about dyslexia.
- **June 2023:** Workshop at LOHADA School, focusing on awareness about dyslexia.
- **July 2023:** Workshop at LOHADA School, focusing on awareness about dyslexia.
- **August 2023:** Workshop at The Tanganyika Early Years School, focusing on awareness about dyslexia, ADHD, and autism.

#### Media Interviews
- **March 2023:** Radio Interview at Impact Radio
- **September 2023:** Radio interview at Idea Radio, N point News, DW and TBC
- **October 2023:** Hope Media, Radio 5

#### Events
- **October 2023:** Launching Dyslexia Tanzania and creating awareness about Dyslexia.

### Places Reached
- **Arusha:** Workshops conducted at The Tanganyika Junior School, LOHADA School, and The Tanganyika Early Years School.
- **Nationwide:** Media interviews reached a nationwide audience.

### IMPACT SNAPSHOT
- **1,000,000:** Approximately Number of people reached on all media interviews conducted.
- **10:** Number of Parents Reached.
- **101:** Number of Other People Reached.
- **200:** Number of Students Reached.
- **153:** Number of Teachers Reached.

### Success & Challenges
- Launched Dyslexia Tanzania.
- Testimonies on how workshops have opened eyes on learning difficulties.
- Partnerships & Collaboration.
- Raised self-esteem, self-awareness & confidence.

**Challenges:**
- Lack of support as a new venture.
- Limited resources to conduct workshops and events.
- Lack of funding.`,
        date: "Jan 5, 2024",
        category: "Reports",
        image: annualReportImg,
        readTime: "10 min",
        likes: 198,
        commentsCount: 12,
        status: "Published",
        impactLabel: "Reach",
        impactValue: 1000000
    }
];
