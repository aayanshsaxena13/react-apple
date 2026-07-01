import type { ReactNode } from "react";
import Typography from "./Typography";

type ListProps<ITEM> = { data: ITEM[], renderItem: (i: ITEM) => ReactNode };

export function List<ITEM>({ data, renderItem }: ListProps<ITEM>) {
  return (
    <div className="m-2">
      {data?.map((item: any, index: number) => (
        <div key={index} className="bg-[#2e2e2e] p-px text-white min-w-50 max-w-150" style={{
          borderBottomWidth: data.length - 1 !== index ? 1.6 : 0,
          borderColor: "rgb(116, 116, 116)",
          borderTopRightRadius: index === 0 ? 12 : 0,
          borderTopLeftRadius: index === 0 ? 12 : 0,
          borderBottomLeftRadius: data.length - 1 === index ? 12 : 0,
          borderBottomRightRadius: data.length - 1 === index ? 12 : 0,
          overflow: "hidden",
        }}>
          {renderItem?.(item)}
        </div>
      ))}
    </div>
  );
};

interface TableProps<T extends Record<string, any[]>> {
  data: T;
  alignment?: 'center' | 'start' | 'end';
}

export function Table<T extends Record<string, any[]>>({
  data,
  alignment
}: TableProps<T>) {
  // Extract keys with proper typing
  const keys = Object.keys(data) as Array<keyof T & string>;
  const values = Object.values(data);

  const alignMap: Record<string, string> = {
    center: 'self-center',
    start: 'self-start',
    end: 'self-end',
  };

  return (
    <div
      className={`flex flex-row ${alignment ? alignMap[alignment] : ''} m-2`}
    >
      {/* Keys Column (Labels) */}
      <div className="flex flex-col">
        {keys.map((item, index) => (
          <div
            key={item}
            className={`
              bg-[#2e2e2e] flex items-center justify-center border-gray-500
              min-[450px]:w-30 max-[450px]:w-40
              p-px min-[450px]:p-px
              ${index === 0 ? 'rounded-tl-xl' : ''}
              ${index === keys.length - 1 ? 'rounded-bl-xl border-b-0' : 'border-b-[1.6px] min-[450px]:border-b-[1.6px]'}
              border-r-[1.6px] min-[450px]:border-r-[1.6px]
            `}
          >
            <Typography color="white" alignment="center" margin={2} type="paragraph">{item}</Typography>
          </div>
        ))}
      </div>

      {/* Values Column */}
      <div className="flex flex-col">
        {values.map((item, index) => (
          <div
            key={index}
            className={`
              bg-[#2e2e2e] border-gray-500
              ${index === 0 ? 'rounded-tr-xl' : ''}
              ${index === values.length - 1 ? 'rounded-br-xl border-b-0' : 'border-b-[1.6px] min-[450px]:border-b-[1.6px]'}
            `}
          >
            <div className="flex flex-row">
              {item.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className={`
                    flex items-center justify-center overflow-hidden mx-1
                    min-[450px]:w-50 max-[450px]:w-150
                    p-px min-[450px]:p-px
                    border-[#c7c7c7]/70
                    ${subIndex !== item.length - 1 ? 'border-r-[1.6px] min-[450px]:border-r-[1.6px]' : 'border-r-0'}
                  `}
                >
                  <Typography color="white" alignment="center" margin={2} type="paragraph">{String(subItem)}</Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
