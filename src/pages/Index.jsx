import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paw } from "lucide-react";

const dogBreeds = [
  {
    name: "Labrador Retriever",
    description: "Friendly, active and outgoing",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
  },
  {
    name: "German Shepherd",
    description: "Intelligent, versatile and loyal",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
  },
  {
    name: "Golden Retriever",
    description: "Intelligent, friendly, and devoted",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg"
  }
];

const Index = () => {
  const [currentBreed, setCurrentBreed] = useState(0);

  const nextBreed = () => {
    setCurrentBreed((prev) => (prev + 1) % dogBreeds.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Discover Dog Breeds</h1>
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{dogBreeds[currentBreed].name}</CardTitle>
            <CardDescription>{dogBreeds[currentBreed].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img 
              src={dogBreeds[currentBreed].image} 
              alt={dogBreeds[currentBreed].name}
              className="w-full h-64 object-cover rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={nextBreed} className="w-full">
              <Paw className="mr-2 h-4 w-4" /> Next Breed
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
