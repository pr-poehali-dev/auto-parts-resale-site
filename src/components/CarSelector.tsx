import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const brands = ['Toyota', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai', 'Kia', 'Mazda'];
const models = {
  'Toyota': ['Camry', 'Corolla', 'RAV4', 'Land Cruiser'],
  'BMW': ['3 Series', '5 Series', 'X5', 'X3'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'GLE', 'GLC'],
};
const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];

export default function CarSelector() {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const handleSearch = () => {
    if (selectedBrand && selectedModel && selectedYear) {
      alert(`Поиск запчастей для ${selectedBrand} ${selectedModel} ${selectedYear}`);
    }
  };

  return (
    <section id="car-selector" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-4">
                  <Icon name="Car" className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl">Подбор запчастей по марке автомобиля</CardTitle>
              <p className="text-muted-foreground mt-2">
                Выберите марку, модель и год выпуска вашего автомобиля
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Марка</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите марку" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Модель</label>
                  <Select 
                    value={selectedModel} 
                    onValueChange={setSelectedModel}
                    disabled={!selectedBrand}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите модель" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedBrand && models[selectedBrand as keyof typeof models]?.map(model => (
                        <SelectItem key={model} value={model}>{model}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Год</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите год" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={year}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full"
                onClick={handleSearch}
                disabled={!selectedBrand || !selectedModel || !selectedYear}
              >
                <Icon name="Search" className="mr-2 h-5 w-5" />
                Найти запчасти
              </Button>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex gap-2">
                  <Icon name="Info" className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900">
                    Система подберёт только те запчасти, которые подходят для вашего автомобиля
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
