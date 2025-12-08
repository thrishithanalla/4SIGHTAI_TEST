from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import uvicorn

# Load environment variables
load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Pydantic model for request validation
class ContactRequest(BaseModel):
    name: str
    phone: str = None
    email: str
    message: str

@app.post("/api/contact")
async def contact(request: ContactRequest):
    # SMTP Configuration
    smtp_host = os.getenv('SMTP_HOST')
    smtp_port = int(os.getenv('SMTP_PORT', 587))
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASS')
    recipient_email = 'askapal128@gmail.com'

    if not smtp_host or not smtp_user or not smtp_pass:
        raise HTTPException(status_code=500, detail="Server SMTP configuration missing.")

    # Email Content
    msg = MIMEMultipart()
    msg['From'] = f"{request.name} <{smtp_user}>"
    msg['To'] = recipient_email
    msg['Reply-To'] = request.email
    msg['Subject'] = f"New Contact Request from {request.name}"

    body = f"""
    Name: {request.name}
    Phone: {request.phone if request.phone else 'Not provided'}
    Email: {request.email}
    
    Message:
    {request.message}
    """
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Create SMTP session
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls() 
        server.login(smtp_user, smtp_pass)
        text = msg.as_string()
        server.sendmail(smtp_user, recipient_email, text)
        server.quit()
        
        return {"success": True, "message": "Email sent successfully!"}

    except Exception as e:
        print(f"Error sending email: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
