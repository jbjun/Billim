import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

interface IProductCardProps {
  address: string
  title: string
  price: string
  per: "day" | "month" | "year"
}

type PerType = "day" | "month" | "year"

export default function ProductCard({ address, title, price, per }: IProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345, border: "none" }} variant="outlined">
      <CardMedia sx={{ height: 240 }} image="https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg" title="test image" />
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {address}
        </Typography>
        <Typography gutterBottom variant="body1">
          {title}
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: "bold" }}>{price}</span>/ {getPerTitle(per)}
        </Typography>
      </CardContent>
    </Card>
  )
}

function getPerTitle(per: PerType) {
  switch (per) {
    case "day":
      return "일"
    case "month":
      return "월"
    case "year":
      return "년"

    default:
      break
  }
}
