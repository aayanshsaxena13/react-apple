import type { ReactNode } from "react";

type ListProps<ITEM> = { data: ITEM[], renderItem: (i: ITEM) => ReactNode };

export function List<ITEM>({ data, renderItem }: ListProps<ITEM>) {
  return (
    <div className="m-2">
      {data?.map((item: any, index: number) => (
        <div key={index} className="bg-[#2e2e2e] p-0.5 text-white min-w-50 max-w-100" style={{
          borderBottomWidth: data.length - 1 !== index ? 2 : 0,
          borderColor: "rgb(116, 116, 116)",
          borderTopRightRadius: index === 0 ? 12 : 0,
          borderTopLeftRadius: index === 0 ? 12 : 0,
          borderBottomLeftRadius: data.length - 1 === index ? 12 : 0,
          borderBottomRightRadius: data.length - 1 === index ? 12 : 0,
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
              w-25 min-[420px]:w-30 
              p-2 min-[420px]:p-2
              ${index === 0 ? 'rounded-tl-2xl' : ''}
              ${index === keys.length - 1 ? 'rounded-bl-2xl border-b-0' : 'border-b-2 min-[420px]:border-b-2'}
              border-r-[1.6px] min-[420px]:border-r-2
            `}
          >
            <p className="text-center text-white">{item}</p>
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
              ${index === 0 ? 'rounded-tr-2xl' : ''}
              ${index === values.length - 1 ? 'rounded-br-2xl border-b-0' : 'border-b-2 min-[420px]:border-b-2'}
            `}
          >
            <div className="flex flex-row">
              {item.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className={`
                    flex items-center justify-center overflow-hidden mx-1
                    w-25 min-[420px]:w-30 
                    p-2 min-[420px]:p-2
                    border-[#c7c7c7]/70
                    ${subIndex !== item.length - 1 ? 'border-r-2 min-[420px]:border-r-2' : 'border-r-0'}
                  `}
                >
                  <p className="text-center text-white">
                    {String(subItem)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
