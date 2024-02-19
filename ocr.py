import pytesseract
from PIL import Image

# Path to your Tesseract OCR executable (update this if necessary)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def perform_ocr(image_path):
    # Open the image using PIL (Python Imaging Library)
    with Image.open(image_path) as img:
        # Perform OCR on the image
        text = pytesseract.image_to_string(img)
        return text

# Path to your image file (update this with the path to your image)
image_path = 'docs\data\l6_pg1.png'
# Perform OCR on the image
ocr_text = perform_ocr(image_path)
# Print the OCR result
print('OCR Result:')
