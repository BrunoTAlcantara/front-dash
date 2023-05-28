import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  LabelList,
  Cell,
  Label,
} from "recharts";

const data = [
  { name: "Futebol", value: 40, fill: "#0088FE" },
  { name: "E-sports", value: 30, fill: "#00C49F" },
  { name: "Volei", value: 30, fill: "#FFBB28" },
  { name: "Mais de 1 gol", value: 20, fill: "#FF8042" },
];

let renderLabel = function (entry: { name: string }) {
  return entry.name;
};

export default function PieCharts() {
  return (
    <div>
      <ResponsiveContainer width="95%" height={300}>
        <PieChart>
          <Pie
            label={renderLabel}
            data={data}
            dataKey="value"
            innerRadius={60}
            fill="#8884d8"
            paddingAngle={0}
            nameKey="name"
            isAnimationActive={true}
          >
            <LabelList dataKey="value" style={{ fontSize: "13px" }} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
