const pendingAppointments = [
    {
        name: "a",
        id: 1,
        prescriptionId: 100,
        description: "asdfas a sd asdhaj shdfaj s",
        medicines: [
            {
                id: 1,
                name: "Paracetamol",
                dose: "asdon f asdf"
            },
            {
                id: 2,
                name: "Soframycin",
                dose: "ka sjdg nj"
            },
            {
                id: 3,
                name: "Morphine",
                dose: "nsfn jndvjen f"
            },
            {
                id: 4,
                name: "Erythromycin",
                dose: "sadn sd fj sasd f"
            }
        ],
        preferredDoctor: "Dr. A",
        slot: "Morning"
    },
    {
        name: "b",
        id: 2,
        prescriptionId: 200,
        description: "dfhg dgfdg fg e adva",
        medicines: [
            {
                id: 1,
                name: "Paracetamol",
                dose: "asdon f asdf"
            },
            {
                id: 2,
                name: "Soframycin",
                dose: "ka sjdg nj"
            }
        ],
        preferredDoctor: "Dr. B",
        slot: "Morning"
    },
    {
        name: "c",
        id: 3,
        prescriptionId: 300,
        description: "erh rfd hbtdf ghbdfh sdfasf",
        medicines: [
            {
                id: 1,
                name: "Paracetamol",
                dose: "asdon f asdf"
            },
            {
                id: 2,
                name: "Soframycin",
                dose: "ka sjdg nj"
            },
            {
                id: 3,
                name: "Morphine",
                dose: "nsfn jndvjen f"
            }
        ],
        preferredDoctor: "Dr. C",
        slot: "Evening"
    }
]

export const ongoingAppointments = [
    {
        name: "d",
        id: 4,
        prescriptionId: 400,
        description: "ashdbfhan sndfka bsfjabw sjfdnajds",
        medicines: [
            {
                id: 1,
                name: "Paracetamol",
                dose: "asdon f asdf"
            },
            {
                id: 2,
                name: "Soframycin",
                dose: "ka sjdg nj"
            },
            {
                id: 3,
                name: "Morphine",
                dose: "nsfn jndvjen f"
            },
            {
                id: 4,
                name: "Erythromycin",
                dose: "sadn sd fj sasd f"
            },
            {
                id: 5,
                name: "Esomeprazole",
                dose: "asdfn nsdf ansdf"
            }
        ],
        preferredDoctor: "Dr. D",
        slot: "Morning"
    },
    {
        name: "e",
        id: 5,
        prescriptionId: 500,
        description: "sgabb nfjnasn dfansfjkajf  ads",
        medicines: [
            {
                id: 1,
                name: "Paracetamol",
                dose: "asdon f asdf"
            },
            {
                id: 4,
                name: "Erythromycin",
                dose: "sadn sd fj sasd f"
            },
            {
                id: 5,
                name: "Esomeprazole",
                dose: "asdfn nsdf ansdf"
            }
        ],
        preferredDoctor: "Dr. E",
        slot: "Evening"
    }
]

export const completedAppointments = [
    {
        name: "f",
        id: 6,
        prescriptionId: 600,
        description: "sgfj annsdfjnvhjasdjfcasdfa",
        medicines: [
            {
                id: 1,
                name: "Paracetamol",
                dose: "asdon f asdf"
            },
            {
                id: 2,
                name: "Soframycin",
                dose: "ka sjdg nj"
            },
            {
                id: 4,
                name: "Erythromycin",
                dose: "sadn sd fj sasd f"
            },
            {
                id: 5,
                name: "Esomeprazole",
                dose: "asdfn nsdf ansdf"
            }
        ],
        preferredDoctor: "Dr. A",
        slot: "Evening"
    }
]

export default pendingAppointments;