import { Label, Select, TextInput } from "flowbite-react";
import { Computer } from "../types/Computer";
import { useState } from "react";

const FormAddComputer =()=>{
    const [computer, setComputer] = useState<Computer>({
    Id:0,
    Status:1,
    Observation:'',
    EquipamentUniqueCode:'',
    EquipamentBrand:'',
    EquipamentCategory: [],
    EquipamentSerial: '',
    ConditionRating: [],
    MachineNumber: 0
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setComputer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(computer);
    };


    return(
        <div className="grid grid-cols-2 gap-x-20">
        
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="EquipamentSerial" value="Serial del equipo"/>
          </div>
          <TextInput id="EquipamentSerial" type="text" name="EquipamentSerial" value={computer.EquipamentSerial} onChange={handleChange} sizing="md" required/>
        </div>

        <div className="my-3">
        <div className="mb-2 block">
           <Label htmlFor="ConditionRating" value="Condición"/>
        </div>
        <Select id="ConditionRating" name="ConditionRating" value={computer.ConditionRating} onChange={handleChange} required>
        <option>Seleccione la condición</option>
           <option>Nueva</option>
           <option>Buenas</option>
           <option>Aceptable</option>
           <option>Mala</option>
        </Select>
        </div>


        <div className="my-3">
        <div className="mb-2 block">
           <Label htmlFor="EquipamentCategory" value="Categoría"/>
        </div>
        <Select id="EquipamentCategory" name="EquipamentCategory" value={computer.EquipamentCategory} onChange={handleChange} required>
           <option>Selecciones la categoría</option>
           <option>Mouse</option>
           <option>Teclado</option>
           <option>Monitor</option>
        </Select>
        </div>

        <div className="my-3">
        <div>
           <Label htmlFor="Status" value="Estado"/>
        </div>
        <Select id="Status" name="Status" value={computer.Status} onChange={handleChange} required>
           <option>Seleccione el estado</option>
           <option>Disponible</option>
           <option>Ocupado</option>
           <option>En mantenimiento</option>
        </Select>

        </div>
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="EquipamentUniqueCode" value="Codigo"/>
          </div>
          <TextInput id="EquipamentUniqueCode" type="text" name="EquipamentUniqueCode" value={computer.EquipamentUniqueCode} onChange={handleChange} sizing="md" required />
        </div>

        <div className="my-3">
          <div className="me-8 block">
            <Label htmlFor="Observation" value="Observaciones"/>
          </div>
          <TextInput id="Observation" type="text" name="Observation" value={computer.Observation} onChange={handleChange} sizing="md" required/>
        </div>
        
        <div className="my-3">
          <div className="mb-2 block">
            <Label htmlFor="EquipamentBrand" value="Marca"/>
          </div>
          <TextInput id="EquipamentBrand" type="text" name="EquipamentBrand" value={computer.EquipamentBrand} onChange={handleChange} sizing="md" required/>
        </div>

        
        <div className="col-span-1">
        <button type="submit" 
        className="bg-Bottoms w-fit text-Text text-lg rounded-lg 
        p-1 hover:bg-Bottoms-dark hover:scale-105 px-3 py-3
        mt-6">Confirmar</button>
        </div>
      </div>  
    );
} 
export default FormAddComputer