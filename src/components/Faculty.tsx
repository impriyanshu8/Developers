import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mail,
  Phone,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const facultyData = {
    "Computer Science": [
      {
        name: "Dr. Sarbjeet Singh",
        designation: "Professor & Co-ordinator",
        specialization:
          "Machine Learning, Social Network Analysis, Cloud Computing.",
        email: "sarbjeet@pu.ac.in",
        phone: "9815951674",
        experience: "18 years",
        qualification: "Ph.D in Computer Science",
        publications: 45,
        image: "photo-1507003211169-0a1dd7228f2d",
      },
      {
        name: "Dr. Savita Gupta",
        designation: "Professor",
        specialization:
          "Signal and Image Processing, Medical Image Analysis, Wavelets based Signal and Image processing",
        email: "savita2k8@yahoo.com",
        phone: "7087940363",
        experience: "12 years",
        qualification: "Ph.D in Computer Science",
        publications: 32,
        image: "photo-1494790108755-2616c34b009c",
      },
      {
        name: "Dr. Sukhwinder Singh",
        designation: "Professor",
        specialization: "Image Processing & Analysis, Machine Intelligence.",
        email: "sukhdalip@pu.ac.in",
        phone: "9417756421",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Harish Kumar",
        designation: "Professor",
        specialization:
          "Wireless Networks, Telecommunication Systems, Information Retrieval.",
        email: "harishk@pu.ac.in",
        phone: "9815964121",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Sakshi Kaushal",
        designation: "Professor",
        specialization:
          " Wireless Networks, Telecommunication Systems,  Cloud Computing.",
        email: "sakshi@pu.ac.in",
        phone: "9872236600",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Naveen Aggarwal",
        designation: "Professor",
        specialization:
          "Data mining and Image Processing, Video pattern reorganization",
        email: "navagg@pu.ac.in",
        phone: "9814865455",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Ajay Mittal",
        designation: "Professor",
        specialization:
          "Image Processing, Computer Vision, Machine Learning, Medical Image Analysis, BioMedical Engineering",
        email: "ajaymittal@pu.ac.in",
        phone: "9417039925",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Mukesh Kumar",
        designation: "Professor",
        specialization:
          "Information Retrieval, Machine Learning, Social Media Analytics.",
        email: "mukesh_rai9@pu.ac.in",
        phone: "9417573099",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Vishal Gupta",
        designation: "Professor",
        specialization:
          "Natural Language Processing, Data Mining, Information Retrieval, Social Network analysis.",
        email: "vishal@pu.ac.in",
        phone: "9914504524",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Prof. Akashdeep",
        designation: "Professor",
        specialization: " Machine and Deep Learning, Video Analytics.",
        email: "akashdeep@pu.ac.in",
        phone: "9814925790",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Prof. Mamta Juneja",
        designation: "Professor",
        specialization:
          "  Biomedical Imaging, Medical Devices and Restorative Technologies, Machine Learning, Deep Learning.",
        email: "mamtajuneja@pu.ac.in",
        phone: "9878677624",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Prof. Makhan Singh",
        designation: "Professor",
        specialization:
          " Privacy and storage Management in Distributed Systems, Information dispersal in Cloud Computing",
        email: "singhmakhan@pu.ac.in",
        phone: "9417020029",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Nirmal Kaur",
        designation: "Associate Professor",
        specialization:
          "Machine Learning, Deep Learning, Parallel and Distributed Computing",
        email: "nirmaljul19@gmail.com",
        phone: "8146522779",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Mr. Rohit Kumar",
        designation: "Assistant Professor",
        specialization: "Software Engineering, Web Technologies",
        email: "rklachotra@gmail.com",
        phone: "9501926750",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Ravreet Kaur",
        designation: "Assistant Professor",
        specialization:
          "Machine Learning, Image Processing, Medical Image Analysis",
        email: "ravreetkaur@pu.ac.in",
        phone: "8968500084",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Preeti Aggarwal",
        designation: "Assistant Professor",
        specialization:
          " Image Processing, Medical Image Analysis, Data Mining Approaches, Big Data Analysis.",
        email: "pree_agg@pu.ac.in",
        phone: "9872021863",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Deepti Gupta",
        designation: "Assistant Professor",
        specialization: "Wireless Sensor Networks; Data Mining.",
        email: "deeptigupta@pu.ac.in",
        phone: "9464288284",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
    ],
    "Information Technology": [
      {
        name: "Dr. Sarbjeet Singh",
        designation: "Professor & Co-ordinator",
        specialization:
          "Machine Learning, Social Network Analysis, Cloud Computing.",
        email: "sarbjeet@pu.ac.in",
        phone: "9815951674",
        experience: "18 years",
        qualification: "Ph.D in Computer Science",
        publications: 45,
        image: "photo-1507003211169-0a1dd7228f2d",
      },
      {
        name: "Dr. Savita Gupta",
        designation: "Professor",
        specialization:
          "Signal and Image Processing, Medical Image Analysis, Wavelets based Signal and Image processing",
        email: "savita2k8@yahoo.com",
        phone: "7087940363",
        experience: "12 years",
        qualification: "Ph.D in Computer Science",
        publications: 32,
        image: "photo-1494790108755-2616c34b009c",
      },
      {
        name: "Dr. Sukhwinder Singh",
        designation: "Professor",
        specialization: "Image Processing & Analysis, Machine Intelligence.",
        email: "sukhdalip@pu.ac.in",
        phone: "9417756421",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Harish Kumar",
        designation: "Professor",
        specialization:
          "Wireless Networks, Telecommunication Systems, Information Retrieval.",
        email: "harishk@pu.ac.in",
        phone: "9815964121",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Sakshi Kaushal",
        designation: "Professor",
        specialization:
          " Wireless Networks, Telecommunication Systems,  Cloud Computing.",
        email: "sakshi@pu.ac.in",
        phone: "9872236600",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Naveen Aggarwal",
        designation: "Professor",
        specialization:
          "Data mining and Image Processing, Video pattern reorganization",
        email: "navagg@pu.ac.in",
        phone: "9814865455",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Ajay Mittal",
        designation: "Professor",
        specialization:
          "Image Processing, Computer Vision, Machine Learning, Medical Image Analysis, BioMedical Engineering",
        email: "ajaymittal@pu.ac.in",
        phone: "9417039925",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Mukesh Kumar",
        designation: "Professor",
        specialization:
          "Information Retrieval, Machine Learning, Social Media Analytics.",
        email: "mukesh_rai9@pu.ac.in",
        phone: "9417573099",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Vishal Gupta",
        designation: "Professor",
        specialization:
          "Natural Language Processing, Data Mining, Information Retrieval, Social Network analysis.",
        email: "vishal@pu.ac.in",
        phone: "9914504524",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Prof. Akashdeep",
        designation: "Professor",
        specialization: " Machine and Deep Learning, Video Analytics.",
        email: "akashdeep@pu.ac.in",
        phone: "9814925790",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Prof. Mamta Juneja",
        designation: "Professor",
        specialization:
          "  Biomedical Imaging, Medical Devices and Restorative Technologies, Machine Learning, Deep Learning.",
        email: "mamtajuneja@pu.ac.in",
        phone: "9878677624",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Prof. Makhan Singh",
        designation: "Professor",
        specialization:
          " Privacy and storage Management in Distributed Systems, Information dispersal in Cloud Computing",
        email: "singhmakhan@pu.ac.in",
        phone: "9417020029",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Nirmal Kaur",
        designation: "Associate Professor",
        specialization:
          "Machine Learning, Deep Learning, Parallel and Distributed Computing",
        email: "nirmaljul19@gmail.com",
        phone: "8146522779",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Mr. Rohit Kumar",
        designation: "Assistant Professor",
        specialization: "Software Engineering, Web Technologies",
        email: "rklachotra@gmail.com",
        phone: "9501926750",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Ravreet Kaur",
        designation: "Assistant Professor",
        specialization:
          "Machine Learning, Image Processing, Medical Image Analysis",
        email: "ravreetkaur@pu.ac.in",
        phone: "8968500084",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Preeti Aggarwal",
        designation: "Assistant Professor",
        specialization:
          " Image Processing, Medical Image Analysis, Data Mining Approaches, Big Data Analysis.",
        email: "pree_agg@pu.ac.in",
        phone: "9872021863",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
      {
        name: "Dr. Deepti Gupta",
        designation: "Assistant Professor",
        specialization: "Wireless Sensor Networks; Data Mining.",
        email: "deeptigupta@pu.ac.in",
        phone: "9464288284",
        experience: "8 years",
        qualification: "Ph.D in Computer Science",
        publications: 28,
        image: "photo-1472099645785-5658abf4ff4e",
      },
    ],
    Electronics: [
      {
        name: "Dr. Jaget Singh",
        designation: "Professor & Coordinator",
        specialization: "Antenna and Microwave Engineering",
        email: "jaget_singh80yahoo.co.in",
        phone: "9464169791",
        office: "Room 301, UIET Building",
        experience: "8 years approx",
        qualification: "M.Tech, R.G.P.V. Bhopal",
        publications: 13,
        image: "/",
        isCoordinator: true,
        researchAreas: ["Microwave", "Antennas Design"],
        courses: ["Microwave", "Antennas Design"],
      },
      {
        name: "Prof. Renu Vig",
        designation: "Professor",
        specialization: "Wireless and Mobile Communication",
        email: "renuvig@pu.ac.in",
        phone: "9814126152",
        experience: "35+ years",
        qualification:
          "Ph.D. Artificial Intelligence & Neural Networks, Panjab University, Chandigarh",
        publications: 164,
        image: "",
        researchAreas: [
          "Artificial Intelligence",
          "Neural Networks",
          "Fuzzy Logic",
          "Signal Processing",
          "Biomedical Systems",
        ],
        courses: [
          "Signal Processing",
          "Fuzzy Systems",
          "AI/Neural Networks",
          "Control Systems",
        ],
      },
      {
        name: "Prof. Sunil Aggarwal",
        designation: "Professor",
        specialization: "Wireless communication, Artificial Intelligence",
        email: "s.agrawal@pu.ac.in",
        phone: "9417723296",
        experience: "34 years",
        qualification:
          "Ph.D. Electronics & Communication, Panjab University (Chandigarh)",
        publications: 63,
        image: "",
        researchAreas: ["Wireless Comm", "AI", "Signal/Image Processing"],
        courses: ["Wireless Comm", "AI", "Signal/Image Processing"],
      },
      {
        name: "Prof. Arvind Kumar",
        designation: "Professor",
        specialization:
          "Microelectronics, Sensors Design, Biomass and Photovoltaic Energy Systems",
        email: "arvind_uiet@pu.ac.in",
        phone: "9417600579",
        experience: "10+ years",
        qualification:
          "Ph.D. Thin-Film Based Temperature Sensors, Panjab University (Chandigarh)",
        publications: 6,
        image: "",
        researchAreas: ["Microelectronics", "VLSI", "Sensor Design"],
        courses: ["Microelectronics", "VLSI", "Sensor Design"],
      },
      {
        name: "Dr. Naresh Kumar",
        designation: "Professor",
        specialization: "Wireless and Mobile Communication",
        email: "naresh_uiet@yahoo.com",
        phone: "9216392982",
        experience: "21 years",
        qualification:
          "Ph.D. Electronics & Communication Engg., Panjab University (Chandigarh)",
        publications: 56,
        image: "",
        researchAreas: [
          "Wireless Comm",
          "Underwater Acoustic Comm",
          "Cognitive Radios",
        ],
        courses: [
          "Wireless Comm",
          "Underwater Acoustic Comm",
          "Cognitive Radios",
        ],
      },
      {
        name: "Dr. Sumit Budhiraja",
        designation: "Professor",
        specialization: "Signal Processing and Communication",
        email: "sumitbudhiraja@gmail.com",
        phone: "9876193545",
        experience: "20 years",
        qualification:
          "Ph.D. Electronics & Communication Engg., Panjab University (Chandigarh)",
        publications: 50,
        image: "",
        researchAreas: ["Signal & Image Processing", "Sparse Representation"],
        courses: ["Signal & Image Processing", "Sparse Representation"],
      },
      {
        name: "Dr. Preeti Singh",
        designation: "Professor",
        specialization:
          "Optical Communication (wired and wireless) and Optical Biosensor",
        email: "preeti_singh@pu.ac.in",
        phone: "8054001599",
        experience: "24 years",
        qualification:
          "Ph.D. CSE (Medical Image Retrieval), Panjab University (Chandigarh)",
        publications: 35,
        image: "",
        researchAreas: ["Image Processing", "ML/DL", "Biomedical Imaging"],
        courses: ["Image Processing", "ML/DL", "Biomedical Imaging"],
      },
      {
        name: "Dr. Charu Madhu",
        designation: "Professor",
        specialization: "Nanophotonics, Optical Communication",
        email: "charu_uiet@pu.ac.in",
        phone: "8146560572",
        experience: "17 years",
        qualification: "Ph.D. Nanoelectronics, Panjab University (Chandigarh)",
        publications: 65,
        image: "",
        researchAreas: [
          "Nanophotonics",
          "Optical Communication",
          "Device Modeling",
        ],
        courses: ["Nanophotonics", "Optical Communication", "Device Modeling"],
      },
      {
        name: "Dr. Nidhi Garg",
        designation: "Professor",
        specialization:
          "Digital System Design, Digital signal and Bio-signal Processing",
        email: "nidhi_garg@pu.ac.in ",
        phone: "8727058014",
        experience: "14 years",
        qualification: "Ph.D., Panjab University (Chandigarh)",
        publications: 14,
        image: "",
        researchAreas: ["Digital systems", "signal & bio-signal processing"],
        courses: ["Digital systems", "signal & bio-signal processing"],
      },
      {
        name: "Dr. Neeraj Sharma",
        designation: "Associate Professor",
        specialization: "Optical Fiber Communication",
        email: "sharma_n@pu.ac.in",
        Phone: "9988403911",
        experience: "18 years",
        qualification:
          "Ph.D. Electronics & Communication, Panjab University, Chandigarh",
        publications: 30,
        image: "",
        researchAreas: ["Optical communication", "MEMS", "Microsystems"],
        courses: ["Optical communication", "MEMS", "Microsystems"],
      },
      {
        name: "Ms. Sharmelle Thangjam",
        designation: "Assistant Professor",
        specialization: "Signal Processing",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Mr. Vishal Sharma",
        designation: "Assistant Professor",
        specialization: "VLSI and Microelectronics",
        email: "vishaluiet@pu.ac.in",
        Phone: "8360644211",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Ms. Preeti Gupta",
        designation: "Assistant Professor",
        specialization: "Digital System Design, Control System and Biometrics",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Dr. Amit Chaudhary",
        designation: "Assistant Professor",
        specialization: "Semiconductor and VLSI",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Dr. Sarvjit Singh",
        designation: "Assistant Professor",
        specialization: "Wireless Communication",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Dr. Garima Joshi",
        designation: "Assistant Professor",
        specialization: "VLSI Design, Image Processing, Pattern Recognition",
        email: "joshi_garima5@yahoo.com",
        Phone: "8847436313",
        experience: "21 years",
        qualification:
          "Ph.D. VLSI, Image Processing, Pattern Recognition, UIET, Panjab University, Chandigarh",
        publications: 32,
        image: "",
        researchAreas: ["VLSI", "Image Processing", "Pattern Recognition"],
        courses: ["VLSI", "Image Processing", "Pattern Recognition"],
      },
      {
        name: "Ms. Daljeet Kaur",
        designation: "Assistant Professor",
        specialization: "Image Processing",
        email: "er.daljeetkaur@gmail.com",
        Phone: "9888491183",
        experience: "15 years",
        qualification:
          "M.E. Electronics & Communication, NITTTR, Punjab University, Chandigarh",
        publications: 5,
        image: "",
        researchAreas: ["Material Science", "Nanotechnology"],
        courses: ["Material Science", "Nanotechnology"],
      },
      {
        name: "Dr. Pardeep Kaur",
        designation: "Assistant Professor",
        specialization: "Wireless Sensor Networks and Optical Communication",
        email: "pardeep.tur@gmail.com",
        Phone: "9815402979",
        experience: "12 years",
        qualification: "Ph.D. ECE, Panjab University, Chandigarh",
        publications: 10,
        image: "",
        researchAreas: [
          "Wireless Sensor Networks",
          "Optical/FSO Communication",
        ],
        courses: ["Wireless Sensor Networks", "Optical/FSO Communication"],
      },
      {
        name: "Mr. Sanjiv Kumar",
        designation: "Assistant Professor",
        specialization: "Optical Communication",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Ms. Harvinder Kaur",
        designation: "Assistant Professor",
        specialization: "Optical Communication",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Mr. Vijay Kumar",
        designation: "Assistant Professor",
        specialization: "VLSI Design",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Dr. Gurpreet Kaur",
        designation: "Assistant Professor",
        specialization: "Digital Signal Processing",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
    ],
    Mechanical: [
      {
        name: "Dr. Ravi Kumar",
        designation: "Professor & Head",
        specialization: "Manufacturing, CAD/CAM",
        email: "ravi.kumar@uiet.puchd.ac.in",
        phone: "+91-172-2534830",
        experience: "20 years",
        qualification: "Ph.D in Mechanical Engineering",
        publications: 42,
        image: "photo-1519085360753-af0119f7cbe7",
      },
    ],
    Electrical: [
      {
        name: "Dr. Nisha Tayal",
        designation: "Associate Professor & Coordinator",
        specialization: "Area of Automation",
        email: "nisha.tayal@pu.ac.in",
        phone: "9814800768",
        office: "Room 301, UIET Building",
        experience: "23 years",
        qualification:
          "M.E. Electrical/Electronics, Punjab Engineering College, Chandigarh",
        publications: 1,
        image: "",
        isCoordinator: true,
        researchAreas: ["Automation", "Embedded Systems", "Smart Grid"],
        courses: ["Microcontrollers", "Control Systems", "Smart Grid"],
      },
      {
        name: "Dr. Yajvender Pal Verma",
        designation: "Professor",
        specialization:
          "Renewable Energy, Wind Power, Congestion, Microgrid Issues, DSM",
        email: "yp_verma@pu.ac.in",
        Phone: "9216384592",
        experience: "22 years",
        qualification: "Ph.D., UIET, PU, Chandigarh",
        publications: 85,
        image: "",
        researchAreas: ["Renewable Energy", "Smart Grid", "Power Electronics"],
        courses: ["Power Electronics", "Smart Grids", "Renewable Systems"],
      },
      {
        name: "Dr. Damanjit Kaur",
        designation: "Professor",
        specialization:
          "Electric Power Systems, Power System Optimization, Artificial Intelligence",
        email: "damaneee@pu.ac.in",
        Phone: "94171513030",
        experience: "18 years",
        qualification: "Ph.D. Power Systems, IIT Roorkee",
        publications: 37,
        image: "",
        researchAreas: [
          "Power Systems Optimization",
          "Smart Grids",
          "AI in EEE",
        ],
        courses: [
          "Power Systems II",
          "Power Electronics & Drives",
          "Lab Coordination",
        ],
      },
      {
        name: "Dr. Deepak Kumar",
        designation: "Professor",
        specialization:
          "Power System Optimization, Renewable Energy, Smart Grid, Demand Side Management",
        email: "dk_uiet@pu.ac.in",
        Phone: "8427680088",
        experience: "14 years",
        qualification:
          "Ph.D. Electrical Engineering (Control Systems), National Institute of Technology, Kurukshetra",
        publications: 14,
        image: "",
        researchAreas: [
          "Control Systems",
          "Optimization Techniques",
          "AI in Power Systems",
        ],
        courses: [
          "Control Systems",
          "Electrical Machines",
          "Power Electronics",
          "Optimization",
          "AI Applications",
        ],
      },
      {
        name: "Dr. Manoj Kumar Sharma",
        designation: "Associate Professor",
        specialization:
          "Neural Networks, Fuzzy Logic, Control Systems, Active Noise Control",
        email: "mks_uiet@pu.ac.in",
        Phone: "9872825095",
        experience: "27 years",
        qualification:
          "Ph.D. Electrical/Electronics (Pursuing), Panjab University, Chandigarh",
        publications: 19,
        image: "",
        researchAreas: ["Neural Networks", "Fuzzy Logic", "Control Systems"],
        courses: ["Computer Networks", "Network Security", "Cryptography"],
      },
      {
        name: "Dr. Parul Gaur",
        designation: "Associate Professor",
        specialization:
          "Communication Engineering, Digital Electronics, Power Electronics",
        email: "parulgaur@pu.ac.in",
        Phone: "8968403488",
        experience: "15 years",
        qualification:
          "Ph.D. Electronics & Communication Engineering, Panjab University, Chandigarh",
        publications: 21,
        image: "",
        researchAreas: [
          "Power Electronics",
          "Communication, Optical Comm.",
          "Signal Processing",
        ],
        courses: [
          "Power Electronics",
          "Communication, Optical Comm.",
          "Signal Processing",
        ],
      },
      {
        name: "Dr. Preetika Sharma",
        designation: "Assistant Professor",
        specialization:
          "Nanoelectronics, Analog and Digital Electronics, Semiconductors",
        email: "preetikamadhav@yahoo.co.in",
        Phone: "9872622921",
        experience: "17 years",
        qualification:
          "Ph.D. Electronics & Communication, Panjab University, Chandigarh",
        publications: 5,
        image: "",
        researchAreas: [
          "Nanoelectronics",
          "Analog & Digital Electronics",
          "Semiconductors",
        ],
        courses: [
          "Analog Electronics",
          "Digital Electronics",
          "Nanoelectronics / Device Physics",
        ],
      },
      {
        name: "Dr. Sarpreet Kaur",
        designation: "Assistant Professor",
        specialization: "Power Systems",
        email: "sarpreetdua@yahoo.co.in",
        Phone: "9914616916",
        experience: "16 years",
        qualification:
          "Ph.D. Power Systems (Pursuing), UIET, Panjab University, Chandigarh",
        publications: 9,
        image: "",
        researchAreas: ["Power Systems"],
        courses: ["Power Systems", "core EEE courses"],
      },
      {
        name: "Dr. Gaurav Sapra",
        designation: "Assistant Professor",
        specialization:
          "Digital Signal Processing, Wireless Communication, Sensor Fabrication, Nanotechnology and Biomedical Devices",
        email: "gaurav.sapra@pu.ac.in",
        Phone: "9815858051",
        experience: "14 years",
        qualification:
          "Ph.D. Electrical/Electronics, Panjab University, Chandigarh",
        publications: 51,
        image: "",
        researchAreas: ["DSP", "Sensors", "Nanotech", "Biomedical Devices"],
        courses: ["DSP", "Sensor/Device Design", "Bio-Instrumentation"],
      },
      {
        name: "Dr. Aditi Gupta",
        designation: "Assistant Professor",
        specialization: "Power Systems, Control Systems",
        email: "aditigupta@pu.ac.in",
        Phone: "9872672319",
        experience: "11 years",
        qualification: "Ph.D. Electrical, Panjab University, Chandigarh",
        publications: 5,
        image: "",
        researchAreas: [
          "Electrical & Electronic Engineering",
          "Energy, Materials Science",
          "CS",
        ],
        courses: [
          "Electrical & Electronic Engineering",
          "Energy, Materials Science",
          "CS",
        ],
      },
      {
        name: "Dr. Sabhyata Soni",
        designation: "Assistant Professor",
        specialization: "",
        email: "",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Mr. Kuldeep Singh Bedi",
        designation: "Assistant Professor",
        specialization: "Power Electronic and Drive",
        email: "kkuldeep1234@gmail.com",
        Phone: "9023200077",
        experience: "9 years",
        qualification:
          "M.E. Electronics, Punjab Engineering College (PEC), Chandigarh",
        publications: 7,
        image: "",
        researchAreas: ["Power Electronics & Drives"],
        courses: ["Power Electronics", "Drives", "EEE core courses"],
      },
      {
        name: "Dr. Puneet Kaur",
        designation: "Assistant Professor",
        specialization: "Power Electronics, Electric Drives, Embedded Systems",
        email: "puneetee@pu.ac.in",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
      {
        name: "Dr. Vivek Pahwa",
        designation: "Assistant Professor",
        specialization: "Electrical Machines and Drive Systems, Power Systems",
        email: "pahwa1974_uiet@pu.ac.in",
        Phone: "",
        experience: " years",
        qualification: "",
        publications: 0,
        image: "",
        researchAreas: ["", "", ""],
        courses: ["", "", ""],
      },
    ],
    Biotechnology: [
      {
        name: "Dr. Shailendra Arya",
        designation: "Professor & Co-ordinator",
        specialization: "Bioprocess Engineering",
        email: "skarya@pu.ac.in",
        phone: "9357733597",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Dr. Sanjeev Puri",
        designation: "Professor",
        specialization:
          "Pathophysiology of Polycystic kidney diseases and renal tissue Regeneration",
        email: "s_puri@pu.ac.in",
        phone: "9872580078",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Ms. Hema Setia",
        designation: "Assistant Professor",
        specialization: "Polymer Science, Environmental Engg.",
        email: "hemasetia@pu.ac.in",
        phone: "9888869196",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Dr. Jaspreet Kaur",
        designation: "Assistant Professor",
        specialization: "Microbial and Medical Biotechnology",
        email: "jaspreet_uiet@pu.ac.in.",
        phone: "8427752520",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Ms. Anupreet Kaur",
        designation: "Assistant Professor",
        specialization: "Microbial Biotechnology & Medical Chemistry",
        email: "anupreet_uiet@pu.ac.in",
        phone: "8283932410",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Dr. Madhu Khatri",
        designation: "Assistant Professor",
        specialization: "Nanotechnology and Environmental Biotechnology",
        email: "madhuk@pu.ac.in",
        phone: "9780021944",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Dr. Mary Chatterjee",
        designation: "Assistant Professor",
        specialization: "Cancer Biology",
        email: "maryc@pu.ac.in",
        phone: "7508581520",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Dr. Ranjana Bhatia",
        designation: "Assistant Professor",
        specialization: "Agricultural Microbiology ,Environmental Microbiology",
        email: "ranjanabhatia20@gmail.com",
        phone: "9915865042",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Dr. Parminder Kaur",
        designation: "Assistant Professor",
        specialization: "Biochemistry, Molecular biology",
        email: "parminder.uiet@gmail.com",
        phone: "9915005242",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
      {
        name: "Dr. Minakshi Garg",
        designation: "Assistant Professor",
        specialization: "Bioinformatics",
        email: "minakshiuiet@gmail.com",
        phone: "9463062046",
        experience: "15 years",
        qualification: "Ph.D in Biotechnology",
        publications: 36,
        image: "",
      },
    ],
  };

  const allFaculty = Object.values(facultyData).flat();
  const filteredFaculty = allFaculty.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { icon: Users, label: "Total Faculty", value: "63" },
    { icon: GraduationCap, label: "Ph.D Holders", value: "58" },
    { icon: BookOpen, label: "Publications", value: "450+" },
    { icon: Award, label: "Research Projects", value: "85" },
  ];

  const FacultyCard = ({ faculty }: { faculty: any }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <img
              src={``}
              alt={faculty.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 h-6 w-6 rounded-full border-2 border-white"></div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {faculty.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-2">
              {faculty.designation}
            </p>
            <p className="text-slate-600 mb-3 text-sm leading-relaxed">
              {faculty.specialization}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
              <div className="flex items-center justify-center sm:justify-start">
                <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                {faculty.qualification}
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Award className="h-4 w-4 mr-2 text-green-500" />
                {faculty.experience} Experience
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                {faculty.publications} Publications
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center hover:bg-blue-50 hover:border-blue-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center hover:bg-green-50 hover:border-green-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section
      id="faculty"
      className="py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Faculty
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meet Our Expert Faculty
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our distinguished faculty members bring decades of academic
            excellence, research expertise, and industry experience to provide
            world-class education.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search faculty by name, specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-slate-300 focus:border-blue-500 rounded-xl shadow-sm"
            />
          </div>
        </div>

        {/* Faculty Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:flex lg:justify-center gap-2 mx-auto mb-12 bg-white  rounded-xl p-2 w-full max-w-4xl">
            <TabsTrigger
              value="all"
              className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
            >
              All Faculty
            </TabsTrigger>
            <TabsTrigger
              value="Computer Science"
              className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
            >
              CSE
            </TabsTrigger>
            <TabsTrigger
              value="Information Technology"
              className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
            >
              IT
            </TabsTrigger>
            <TabsTrigger
              value="Electronics"
              className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
            >
              ECE
            </TabsTrigger>
            <TabsTrigger
              value="Mechanical"
              className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
            >
              ME
            </TabsTrigger>
            <TabsTrigger
              value="Electrical"
              className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
            >
              EEE
            </TabsTrigger>
            <TabsTrigger
              value="Biotechnology"
              className="px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-sm font-medium"
            >
              BT
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(searchTerm ? filteredFaculty : allFaculty).map(
                (faculty, index) => (
                  <FacultyCard key={index} faculty={faculty} />
                )
              )}
            </div>
          </TabsContent>

          {Object.entries(facultyData).map(([department, faculty]) => (
            <TabsContent key={department} value={department}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {faculty.map((member, index) => (
                  <FacultyCard key={index} faculty={member} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Faculty Team</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We are always looking for passionate educators and researchers to
              join our growing faculty community.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
