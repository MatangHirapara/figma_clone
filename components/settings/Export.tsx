import { exportToJpg, exportToPdf, exportToPng } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const options = [
  { label: 'Export to PDF', value: 'exporttopdf' },
  { label: 'Export to PNG', value: 'exporttopng' },
  { label: 'Export to JPG', value: 'exporttojpg' },
];

const Export = () => {
  const handleInputChange = (value: string) => {
    if (value === 'exporttopdf') {
      exportToPdf();  // Call the function
    } else if (value === 'exporttopng') {
      exportToPng();  // Call the function
    } else if (value === 'exporttojpg') {
      exportToJpg();  // Call the function
    }
  };

  return (
    <div className='flex flex-col gap-3 px-5 py-3'>
      <h3 className='text-[10px] uppercase'>Export</h3>
      <Select
        onValueChange={handleInputChange}  // Use onValueChange instead of onOpenChange
        value={''}
      >
        <SelectTrigger className='no-ring w-full rounded-sm border border-primary-grey-200'>
          <SelectValue placeholder='Export Template' />
        </SelectTrigger>
        <SelectContent className='border-primary-grey-200 bg-primary-black text-primary-grey-300'>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className='hover:bg-primary-green hover:text-primary-black'
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Export;
