// src/lib/wasteClassifier.ts

export type WasteAnalysis = {
    name: string;
    category: string;
    recyclable: boolean;
    materials: string[];
    confidence: number;
    disposalGuidance: string;
    tips: string[];
};

type RekognitionLabel = {
    Name: string;
    Confidence: number;
};

export function classifyWaste(
    labels: RekognitionLabel[]
): WasteAnalysis {
    const labelNames = labels.map((label) =>
        label.Name.toLowerCase()
    );

    const topLabel = labels[0];

    const name = topLabel?.Name || "Unknown item";

    const confidence = Math.round(
        topLabel?.Confidence || 0
    );

    // -------------------------
    // E-WASTE
    // -------------------------

    const eWasteKeywords = [
        "adapter",
        "charger",
        "electronics",
        "electronic",
        "computer",
        "keyboard",
        "mouse",
        "mobile phone",
        "phone",
        "laptop",
        "television",
        "monitor",
        "printer",
        "hardware",
        "plug",
        "cable",
    ];

    if (
        eWasteKeywords.some((keyword) =>
            labelNames.includes(keyword)
        )
    ) {
        return {
            name,
            category: "E-Waste",
            recyclable: true,
            materials: [
                "Plastic",
                "Copper",
                "Electronic components",
            ],
            confidence,
            disposalGuidance:
                "Take this electronic item to an authorized e-waste collection center. Do not place it in regular household waste.",
            tips: [
                "Keep electronic waste separate from regular household waste.",
                "Use an authorized e-waste recycling center.",
            ],
        };
    }

    // -------------------------
    // PLASTIC
    // -------------------------

    const plasticKeywords = [
        "plastic",
        "plastic bottle",
        "bottle",
        "container",
    ];

    if (
        plasticKeywords.some((keyword) =>
            labelNames.includes(keyword)
        )
    ) {
        return {
            name,
            category: "Plastic",
            recyclable: true,
            materials: ["Plastic"],
            confidence,
            disposalGuidance:
                "Clean the plastic item and place it in a recyclable waste collection stream where accepted.",
            tips: [
                "Rinse containers before recycling when possible.",
                "Check your local recycling guidelines.",
            ],
        };
    }

    // -------------------------
    // PAPER
    // -------------------------

    const paperKeywords = [
        "paper",
        "cardboard",
        "document",
        "box",
    ];

    if (
        paperKeywords.some((keyword) =>
            labelNames.includes(keyword)
        )
    ) {
        return {
            name,
            category: "Paper",
            recyclable: true,
            materials: ["Paper", "Cardboard"],
            confidence,
            disposalGuidance:
                "Keep paper and cardboard clean and dry, then place them in the appropriate paper recycling stream.",
            tips: [
                "Keep paper dry and free from food contamination.",
                "Flatten cardboard boxes before recycling.",
            ],
        };
    }

    // -------------------------
    // GLASS
    // -------------------------

    const glassKeywords = [
        "glass",
        "glass bottle",
        "glass container",
    ];

    if (
        glassKeywords.some((keyword) =>
            labelNames.includes(keyword)
        )
    ) {
        return {
            name,
            category: "Glass",
            recyclable: true,
            materials: ["Glass"],
            confidence,
            disposalGuidance:
                "Separate the glass item and place it in a glass recycling collection stream where available.",
            tips: [
                "Handle broken glass carefully.",
                "Check whether your local recycling service accepts glass.",
            ],
        };
    }

    // -------------------------
    // DEFAULT
    // -------------------------

    return {
        name,
        category: "General Waste",
        recyclable: false,
        materials: ["Unknown"],
        confidence,
        disposalGuidance:
            "The item could not be confidently classified for recycling. Check your local waste disposal guidelines before throwing it away.",
        tips: [
            "Avoid mixing unknown waste with recyclable materials.",
            "Check your local waste management guidelines.",
        ],
    };
}