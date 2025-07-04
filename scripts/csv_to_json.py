import csv
import json

# Script: csv_to_json.py
# Convierte un archivo productos.csv a productos.json para React

csv_file = 'productos.csv'  # Debe estar en la misma carpeta que este script
json_file = '../src/data/products.ts'  # Salida lista para React

products = []

with open(csv_file, encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Ajusta los campos según tu CSV
        products.append({
            "id": int(row["id"]),
            "name": row["name"],
            "description": row["description"],
            "price": float(row["price"]),
            "image": row["image"],
            "options": {
                "talla": row["talla"].split(',') if row["talla"] else [],
                "color": row["color"].split(',') if row["color"] else [],
                "modelo": row["modelo"].split(',') if row["modelo"] else [],
            }
        })

with open(json_file, 'w', encoding='utf-8') as f:
    f.write('export const products = ')
    json.dump(products, f, ensure_ascii=False, indent=2)
    f.write(';\n')

print(f'Archivo {json_file} generado correctamente.')
