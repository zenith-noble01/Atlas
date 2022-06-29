const questions = [
  {
    questionYear: "June 2020",
    questions: [
      {
        qustionTitle: "1. Computer organisation is how",
        suggestions: [
          {
            a: "The computer hardware logic is organised to carry out its operations.",
            b: "Computer hardware is organised into functional units and subsystems.",
            c: "Computer hardware is organised into functional units and subsystems.",
            d: "The computer hardware is designed to provide services and facilities for use.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "2 .In this classification, each instruction is executed using its own input data, independently of how other instructions get their data. We are using a(n):",
        suggestions: [
          {
            a: "Multiple Instruction Multiple Data.",
            b: "Multiple Instruction Multiple Data.",
            c: "Single Instruction Single Data.",
            d: "Single Instruction Multiple Data ",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "3. It is used for long-term storage of information, but also as an overflow area for executing programs:",
        suggestions: [
          {
            a: "Hard disk.",
            b: "CDROM.",
            c: "CMOS.",
            d: "ROM",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "4. What is the result of the following in sign­ absolute notation? 01ll0100-01001100.",
        suggestions: [
          {
            a: "00101 000.",
            b: "10 101 000.",
            c: "00 010 100.",
            d: "10011000",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "5. What is R in the following circuit diagram?",
        image: "zenith",
        suggestions: [
          {
            a: "A·B+A +B.",
            b: "A·B·A +B.",
            c: "A+B+A·B.",
            d: "A·B+A•B",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "6. It looks for an instruction ·uses circuits to interpret it, and then carries out the instruction in a process known as the:",
        suggestions: [
          {
            a: "Program Instruction Cycle.",
            b: "Machine Instruction Cycle.",
            c: "Machine Execution Cycle.",
            d: "Program Execution Cycle.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "7. When the processor receives a signal, it stops what it is doing in order to attend to the request. The mechanism exploited here is:",
        suggestions: [
          {
            a: "Interrupt signal·",
            b: "Spooling.",
            c: "Interrupt handling.",
            d: "Polling.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "8. The following is true of indirect operand addressing mode:",
        suggestions: [
          {
            a: "The data occupies the address just after the instruction.",
            b: "The data occupies two memory cells of the instruction.",
            c: "One needs to read two more memory cells to get the data.",
            d: "One needs to index memory cells to get the data.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "9. Which of the following is NOT true of machine instruction code?",
        suggestions: [
          {
            a: "It has an instruction format.",
            b: "Its b:t pattern is for specific machines.",
            c: "It has clear addressing formats.",
            d: "All machines have same instructions format.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "10. Its software directly controls the hardware components in order to carry out tasks they are designed for but, essentially, it acts as a c9mputer and is seen as such. It is:",
        suggestions: [
          {
            a: "A monitoring system.",
            b: "An embedded system.",
            c: "An automated system.",
            d: "A control system.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "11. We use them to manipulate and disseminate information among individuals and organisations, possibly over long distances.",
        suggestions: [
          {
            a: "Management Information Systems.",
            b: "Information & Communication Systems.",
            c: "Geographic Information Systems.",
            d: "Data Communication Systems.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "12.Joe hacked into Dan's online bank account and withdrew and returned money Dan stole from Jane. Joe accessed the account by supplying the information Dan normally gives. Joe commit a computer crime.",
        suggestions: [
          {
            a: "Joe illegally accessed an account, whether or not he used computers.",
            b: "No. Joe simply helped Jane to get what was rightfully hers.",
            c: "Joe used computing skills to access an account he shouldn't.",
            d: " No. Joe supplied all the information to legally access the account.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "13. Which of the following controls the aspect the public can see or inquire about you, if stored in a computer system, but allows you to verify or correct the information so stored? .",
        suggestions: [
          {
            a: "Computer Security.",
            b: "Computer Privacy.",
            c: "Joe used computing skills to access an account he shouldn't.",
            d: " No. Joe supplied all the information to legally access the account.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "14. Given today's technology and his immediate access to resources all over the world, Ngene says he is a citizen of the world, not just a· Cameroonian. We agree with him because:",
        suggestions: [
          {
            a: "His computing skills are useful all over the world.",
            b: "He accesses facilities all over the world, as would one living in those countries.",
            c: "His computing skills gives him the same rights as citizens in other countries.",
            d: "D His computing skills gives him extra advantages over ordinary citizens of the world.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "15. Mojoko submitted many problems and their data at a computing Centre, to later get her result online. Processing her work must have required ",
        suggestions: [
          {
            a: "An online processing system.",
            b: "A real-time processing system.",
            c: "A transaction processing system.",
            d: "A batch processing system.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "16. Cloud computing handles resources, data and information in certain ways:",
        suggestions: [
          {
            a: "It provides them as services over the internet.",
            b: "It allows them to be transmitted to assorted machines accross the internet.",
            c: "Allows them to be used over the internet, where they are found.",
            d: " Allows them to be used more efficiently than on stand-alone devices.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "17. Certain programs facilitate the construction of other programs, and can be used over and over again rather than constructed. They are:",
        suggestions: [
          {
            a: "Application programs.",
            b: "Systems programs.",
            c: "Library programs.",
            d: "Utility programs.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "18. A ___ is used such that correct programs in a source programming language are possibly made more efficient while they are made ready for maching execution.",
        suggestions: [
          {
            a: "An assembler.",
            b: "An optimiser.",
            c: "A translator",
            d: "A compiler.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "19. Bisi's computer Help Desk uses many software platforms. She has to quickly respond to frequently asked questions from her clients, so she most probably uses:",
        suggestions: [
          {
            a: "A Graphical User Interface (GUI).",
            b: "A Command Line Interface (CLI).",
            c: "A Linux Interface.",
            d: "An MS Windows Interface.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "20. Jobs P1, P2, and P3 need 6, 4 and 2 units of execution time respectively. They arrive at times I, 4 and 6 as shown below. Which job is . completed last if a Shortest Job First scheduling policy is used?",
        image: "zenith",
        suggestions: [
          {
            a: "P1.",
            b: "P2",
            c: "P3.",
            d: "P2 and P3",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "21. Which of the following is false for segmented paged memory allocation?",
        suggestions: [
          {
            a: "Pages of a program can be in any order in memory.",
            b: "Segments are overlaid onto the physical address space.",
            c: "A page need not occupy a whole segment of memory.",
            d: "The address in a program requires an offset from its page address only.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "22. What input device might a multi-choice questionnaire writer use to input completed forms into a computer.",
        suggestions: [
          {
            a: "Magnetic Ink Character Recognition (MICR)",
            b: "SOptical Mark Reco1mition (OMR)",
            c: "Optical Character Reco ition (OCR).",
            d: "Hand-held computers",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "23. The number -17 translated into an 8-bits two's complement binary integer is:",
        suggestions: [
          {
            a: "",
            b: "11101101",
            c: "10010011",
            d: "11101100",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "24. The positive binary number 1O101111 translated into hexadecimal is:",
        suggestions: [
          {
            a: "AE",
            b: "AF",
            c: "EF",
            d: "FA",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "25. Two Components of the Von Neumann Architecture are:",
        suggestions: [
          {
            a: "Memory and Processor",
            b: "Hard disk and RAM",
            c: "Processor and CPU ·",
            d: "ALU and processor",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "26. Location 600 contains 601, 601 contains 607 and 607 contains 613. What are the contents of register R after the following instruction? (The parentheses indicate indirect addressing) LOAD R, (600)",
        suggestions: [
          {
            a: "600",
            b: "607",
            c: "601",
            d: "613",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "27.  A table in third normal form is one which:",
        suggestions: [
          {
            a: "Has only one primary key.",
            b: "Is linked to another table by means of a foreign key.",
            c: "Have no repeating fields.",
            d: "Contains no non-key dependencies",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "28. In mesh topology, relationship between one device and another is",
        suggestions: [
          {
            a: "Server to Peer",
            b: "Peer to server",
            c: "Client-Server.",
            d: "Peer to Peer",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "29. The performance of data communications network depends on:",
        suggestions: [
          {
            a: "Number of users connected.",
            b: "The hardware and-software.",
            c: "The transmission.",
            d: "All of the above.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "30. Which OSI layer has routers? ·",
        suggestions: [
          {
            a: "Network Layer.",
            b: "Transport Layer.",
            c: "Session Layer.",
            d: "Presentation.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "31. When an entity has the primary key of another entity as an attribute, this creates",
        suggestions: [
          {
            a: "Parent-Child relationship between the tables that connect them.",
            b: "Many to many relationship between the tables that connect them.",
            c: "Network model between the tables that connect them..",
            d: "A one to many relation between the tables that connect them.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "32. A one to many relation between the tables that connect them.",
        suggestions: [
          {
            a: "The list must be sorted.",
            b: "There should be the direct access to the middle element in any sub list.",
            c: "There must be mechanism to delete and/or insert elements in list.",
            d: "Direct access to the middle element in any sub list.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "33. In the database relation R(a, b, d, e,J) attribute b and dare dependent only on a; e only on d; and/only on d. Which of these sets of relations is equivalent to R in third normal form (3NF), if key attributes are underlined? ",
        suggestions: [
          {
            a: "RI(a, b), R2(d, e, f), R3(a,  d).",
            b: "RI(a, b,_d), R2(d_, e), R3(e, f).",
            c: "RI(a, b, d), R2(d,  e), R3(e, f).",
            d: "RI(a, b, d), R2(d, e, f).",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "34. When data goes through a network, data privacy is available when: ",
        suggestions: [
          {
            a: "Only authorised people can control what information can be gathered or disclosed.",
            b: "Individuals control what information can be collected or disclosed about them.",
            c: "A system is always available to perform its intended functions on	data.",
            d: "Only authorised people can access and modify information through a network.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "35. Which data type best holds for processing in the same fashion, the names of a number of plants? ",
        suggestions: [
          {
            a: "Record",
            b: "Array",
            c: "Strings",
            d: "Characters",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "36. How many distinct memory addresses can a processor access if its machine word has 8 bytes?",
        suggestions: [
          {
            a: "64.",
            b: "2 & 16",
            c: "8 & 8.",
            d: "2 & 64.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "37. The design strategy that identifies subtasks based on the operations carried out in them to provide a service or feature is known as:",
        suggestions: [
          {
            a: "Modular design.",
            b: "Functional design.",
            c: "Bottom-up design.",
            d: "Top-down design.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "38. A binary tree whose every node has either zero or two children is called:",
        suggestions: [
          {
            a: "Complete binary tree.",
            b: "Binary search tree.",
            c: "Extended binary tree.",
            d: "Binary tree.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "39. The post order traversal of a binary tree is DEBFCA. Find out the preorder traversal.",
        suggestions: [
          {
            a: "ACBEDF.",
            b: "ACBDFE.",
            c: "ACBDEf.",
            d: "ACBFDG.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "40. Which of the following sorting algorithms is of divide-and-conquer type?·",
        suggestions: [
          {
            a: "Bubble sort.",
            b: "Insertion sort.",
            c: "Quick sort.",
            d: "Algorithm.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "41. Program Readability is typically understood to be:",
        suggestions: [
          {
            a: "The comments and program instructions in a source code.",
            b: "The manual that shows people how to run the program.",
            c: "The book that explains to users the program's features and how they work.",
            d: "The document that describes how the program was constructed.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "42. It is used to observe how values change in memory locations, without altering program instructions, or altering memory locations; during debugging",
        suggestions: [
          {
            a: "Breakpoint",
            b: "Watchpoint",
            c: "Trace point.",
            d: "Print statement.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "43. Some programs will always guarantee an answer if there is one but may run for ever if there is none. Such problems are:",
        suggestions: [
          {
            a: "Uncomputable.",
            b: "Partially computable.",
            c: "Undecidable.",
            d: "Semi-decidable.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "44. Algorithms or problems they solve are sometimes described as hard or intractable. This is often a measure of:",
        suggestions: [
          {
            a: "How much time a human needs to produce the program.",
            b: "How much time a computer needs to execute the program.",
            c: "How complex a program can be to a programmer.",
            d: "How complex a program can be to a computer.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "45. rototyping is a technique that:",
        suggestions: [
          {
            a: "Permits one to design software quickly.",
            b: "Allows software to be quickly adapted to a user's needs.",
            c: "Allows developers to better understand a user's needs.",
            d: "Allows people to start using software before their complete implementation.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "46. The space factor when determining the efficiency of algorithm is measured by counting the:",
        suggestions: [
          {
            a: "Maximum memory needed by the algorithm.",
            b: "Minimum memory needed by the algorithm.",
            c: "Average memory needed by the algorithm.",
            d: "Maximum disk space needed by the algorithm.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "47. To solve a certain problem, some of its procedures are executed on distinct machines, possibly across the world. We designed a(an): A	Parallel algorithm.",
        suggestions: [
          {
            a: "Parallel algorithm.",
            b: "Distributed algorithm.",
            c: "Internet algorithm.",
            d: "Serial Algorithm.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "48. The following are in distinct classes of declarative languages:",
        suggestions: [
          {
            a: "Logic and functional programs.",
            b: "Applicative and functional programs.",
            c: "Applicative and object-orient d programs.",
            d: "Object-oriented and logic programs.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "49. 	Programming language (PL) functions are designed to return a value; the values returned by PL functions are often passed in other functions or procedures:",
        suggestions: [
          {
            a: "As output.",
            b: "As parameter.",
            c: "By value.",
            d: "By reference.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "50. We examine a program, executing and checking its instructions, so as to establish that it behaves as expected. We are doing:",
        suggestions: [
          {
            a: "Black box testing.",
            b: "White box testing.",
            c: "Code inspection.",
            d: "Program review.",
            correct: "d",
          },
        ],
      },
    ],
  },
  {
    questionYear: "June 2018",
    questions: [
      {
        qustionTitle:
          "1. When CPU is executing a program that is part of the Operating System, it is said to be in:",
        suggestions: [
          {
            a: "Interrupt mode.",
            b: "System mode.",
            c: "Boot mode",
            d: "set-up mode.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "2. Inter-process communication:",
        suggestions: [
          {
            a: "is required for all processes.",
            b: "is usually done through disk drive.",
            c: "is not usually necessary",
            d: "allows process to synchronize activity",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "3. Logic gates with a set of input and output is an arrangement termed as:",
        suggestions: [
          {
            a: "Combinational circuit.",
            b: "Logic circuit.",
            c: "Design circuits..",
            d: "Register.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "4. The communication between the components in microcomputer takes place via the address and:",
        suggestions: [
          {
            a: "Input/output bus.",
            b: "Data bus.",
            c: "System bus.",
            d: "Control lines.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "5. What is the binary equivalent of the decimal number 368:",
        suggestions: [
          {
            a: "101110000.",
            b: "110110000.",
            c: "111010000.",
            d: "111100000.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "6. The hexadecimal number for (95.5) 10 is:",
        suggestions: [
          {
            a: "5F.8",
            b: "9A.B",
            c: "2E.F",
            d: "5A.4",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "7. What is the minimum number of bits required to address a 32K memory",
        suggestions: [
          {
            a: "10 bits.",
            b: "12 bits.",
            c: "14 bits.",
            d: "16 bits.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "8. At least how many two-input AND and OR gates respectively are required to realize Y=CD+EF+G",
        suggestions: [
          {
            a: "2,2·",
            b: "2,3.",
            c: "2,1.",
            d: "2,0.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "9. Decoded instruction is stored in:",
        suggestions: [
          {
            a: "MDR.",
            b: "IR",
            c: "PC.",
            d: "MAR.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "10. The fastest data access is provided using: ",
        suggestions: [
          {
            a: "DRAM'S.",
            b: "SRAM'S.",
            c: "Register.",
            d: "Caches.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "11.HTTP is a(n) _______ Protocol",
        suggestions: [
          {
            a: "Application Layer",
            b: "Transport Layer.",
            c: "Data Layer.",
            d: "Network Layer.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "12. Data shared in the application layer is a:",
        suggestions: [
          {
            a: "Message.",
            b: "Datagram.",
            c: "Packet.",
            d: "Frame.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "13. Fiber optics possess the following properties:",
        suggestions: [
          {
            a: "Immunity to electromagnetic interference.",
            b: "Very reduced rate of signal attenuation.",
            c: "Very hard to tap.",
            d: "All of the above mentioned.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "14. Tables in second normal form(2NF):",
        suggestions: [
          {
            a: "Eliminate all hidden dependencies",
            b: "Eliminate the possibility of an insertion abnormalities",
            c: "Have a composite key",
            d: "Have all non-key fields depend on the whole primary key.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "15. Which of the following is NOT a database administrator’s function?",
        suggestions: [
          {
            a: "Database design.",
            b: "Backing up data of specific data users.",
            c: "Performance monitoring of application.",
            d: "None of the above",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "16. A foreign key in a relational database table is a(n):",
        suggestions: [
          {
            a: "et of attribute values in a table.",
            b: "Combination of attributes in a table.",
            c: "Attribute in one table that is an attribute in another table.",
            d: "Column of a table.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "17. The attribute, name, could be structured as an attribute consisting of first name, middle initial, and last name. This type of attribute is called:",
        suggestions: [
          {
            a: "Simple attribute.",
            b: "Composite attribute..",
            c: "Distributed attribute.",
            d: "Multivalued attribute..",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "18. The attribute AGE is calculated from DATE-OF-BIRTH. The attribute AGE is?.",
        suggestions: [
          {
            a: "Single valued.",
            b: "Multivalued.",
            c: "Derived.",
            d: "Composite.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "19. The descriptive property possessed by each entity set is a(n):",
        suggestions: [
          {
            a: "Attribute.",
            b: "Instance",
            c: "Relation.",
            d: "Model.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "20. The ‘’turn-around’’ time of a user’s Job is the:",
        suggestions: [
          {
            a: "Time since its submission to the time its results become available.",
            b: "Time duration for which the CPU is allotted to the job.",
            c: "Total time taken to execute the job.",
            d: "Time taken for the job to move from assembly phase to completion phase.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "21. Which module give control of the CPU to the process selected by the short-term scheduler?",
        suggestions: [
          {
            a: "Dispatcher.",
            b: "Interrupt.",
            c: "Scheduler.",
            d: "None of the above",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "22. Before proceeding with its execution, each process must acquire all the resources it needs. This is described as:",
        suggestions: [
          {
            a: "Hold and wait.",
            b: "Non pre-emption.",
            c: "Circular wait.",
            d: "Starvation.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "23. A technique of temporarily removing in-active programs from the memory of acomputer system is:",
        suggestions: [
          {
            a: "Swapping.",
            b: "Spooling.",
            c: "Semaphore.",
            d: "Scheduler.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "24. A reusable resource is one that:",
        suggestions: [
          {
            a: "Can be use by one process at a time and is not depleted by that use.",
            b: "Can be used by more than one process at a time.",
            c: "Can be shared between various threads.",
            d: "All of the above",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "25. A problem encountered in multitasking when a process is perpetually cenied necessary resource is:",
        suggestions: [
          {
            a: "Deadlock.",
            b: "Starvation.",
            c: "Inversion.",
            d: "Aging.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "26. A pointer variable cannot be:",
        suggestions: [
          {
            a: "Passed to a function as argument.",
            b: "Changed within the function.",
            c: "Returned by a function.",
            d: "Assigned as an integer value.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "27. If the processor is executing a main program that calls subroutine, then after executing the main program up to the CAL instruction, the control will be transferred to the:",
        suggestions: [
          {
            a: "Address of main program.",
            b: "Subroutine address.",
            c: "Address of the CALL instruction.",
            d: "Address of data.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "28. Which of the following allows many users to use the computer simultaneously?",
        suggestions: [
          {
            a: "Time Sharing operating system.",
            b: "Real Time operating system.",
            c: "Interactive operation system.",
            d: "Batch operating system.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "29. One of the following is NOT a memory performance parameter:",
        suggestions: [
          {
            a: "Access time.",
            b: "Cycle time..",
            c: "Transfer rate.",
            d: "Time location..",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "30. WIf a node having two children is deleted froma binary search tree, it is replaced by its:",
        suggestions: [
          {
            a: "In order predecessor.",
            b: "Post order successor.",
            c: "Pre order predecessor.",
            d: "Post order predecessor",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "31. A mathematical model with a collection of operation defined over its values is called:",
        suggestions: [
          {
            a: "A Data Structure.",
            b: "Abstract Data Type",
            c: "Primitive Data Type.",
            d: "Algorithm.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "32. A complete binary tree with 2n+1 nodes contain:",
        suggestions: [
          {
            a: "N leaf nodes.",
            b: "N non-leave nodes.",
            c: "N-1 leaf nodes.",
            d: "N-1 non-leaf nodes.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "33. A sort which searches through a list to exchange the first element with any element less than it and then repeats with a new first element at subsequent positions is called.",
        suggestions: [
          {
            a: "Insertion sort.",
            b: "Selection sort.",
            c: "Bubble sort.",
            d: "Quick sort.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "34. The data structure required to evaluate a postfix expression is:",
        suggestions: [
          {
            a: "Stack.",
            b: "Queue.",
            c: "Tree.",
            d: "Array.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "35. The feature of the object oriented paradigm which explicitly helps code reuse is:",
        suggestions: [
          {
            a: "Object.",
            b: "Class.",
            c: "Inheritance.",
            d: "Aggregation.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "36.The main advantage of multiprogramming system is:",
        suggestions: [
          {
            a: "More than one job can be processed at a given time.",
            b: "CPU utilization can be increased.",
            c: "Jobs can be completed faster",
            d: "All of the above",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "37. An object encapsulates:",
        suggestions: [
          {
            a: "Data.",
            b: "Behavior..",
            c: "State.",
            d: "State and behavior.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "38. If a program in its functioning has not met user requirements in some way, then it is:",
        suggestions: [
          {
            a: "An error.",
            b: "A failure",
            c: "A fault",
            d: "A defect",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "39. A key concept of quality control is that all worked products:",
        suggestions: [
          {
            a: "Are delivered on time and within budget.",
            b: "Have complete documentation.",
            c: "Have measurable specifications for process outputs.",
            d: "Are thoroughly tested before delivery to computer.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "40. Which of the following is also known as pre-Order traversal of a binary tree where a given Node has children left and Right?",
        suggestions: [
          {
            a: "Binary tree.",
            b: "Queue.",
            c: "Stack.",
            d: "Linked list.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "41. The term module in the design phase refers to:",
        suggestions: [
          {
            a: "Functions.",
            b: "Procedures.",
            c: "Sub programs.",
            d: "All of the above.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "42. Which of the following is also known as pre-Order traversal of a binary tree where a given Node has children left and Right?",
        suggestions: [
          {
            a: "Left Node Right.",
            b: "Node Right.",
            c: "Node Right Left.",
            d: "None of the above.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "43. In software engineering projects, what is informally called “SOFTWARE” consist of:",
        suggestions: [
          {
            a: "Set of instruction + operating procedures.",
            b: "Programs + documentation operating procedures.",
            c: "Programs + hardware manuals.",
            d: "Set of programs.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "44. If the state of the database no longer reflects a real state of the world that the database is supposed to capture, then such a state is called",
        suggestions: [
          {
            a: "Consistent state.",
            b: "Parallel state.",
            c: "Durable state.",
            d: "Inconsistent state.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "45. rIf the objects focus on real world entities then we are concerned with.",
        suggestions: [
          {
            a: "Object Oriented Analysis.",
            b: "Object Oriented Design.",
            c: "Object Oriented Analysis.",
            d: "None of the above.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "46. A linear collection of data elements where the linear node is given by means of a pointer is called:",
        suggestions: [
          {
            a: "Node list.",
            b: "Linked list.",
            c: "Primitive list.",
            d: "None of the above.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "47. Software deteriorates rather than wears out because:",
        suggestions: [
          {
            a: "Software suffers from exposure to hostile environments.",
            b: "Defects are more likely to arise after software has been used often.",
            c: "Multiple change requests introduce errors in component interactions.",
            d: "Software spare parts become harder to order.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle:
          "48. A main technique to make a software package portable is to:",
        suggestions: [
          {
            a: "Isolate system dependent components.",
            b: "Increase the overall performance.",
            c: "Have an independent platform for the software.",
            d: "Have a dependent platform.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "49. In system design, we do the following:",
        suggestions: [
          {
            a: "Hardware design after software.",
            b: "Software design after hardware.",
            c: "Parallel hardware and software design.",
            d: "No hardware design needed.",
            correct: "d",
          },
        ],
      },
      {
        qustionTitle: "50.A factor in the selection of a source language is:",
        suggestions: [
          {
            a: "Programmer skill.",
            b: "Language availability.",
            c: "Program compatibility with other software.",
            d: "All the above.",
            correct: "d",
          },
        ],
      },
    ],
  },
];

module.exports = { questions };
