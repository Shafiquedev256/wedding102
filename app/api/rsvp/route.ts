import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export async function OPTIONS() {
  return NextResponse.json("ok", { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rsvpData } = body;

    if (!rsvpData || !rsvpData.name || !rsvpData.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required RSVP data" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Prepare CSV for email attachment
    const guestNamesString =
      Array.isArray(rsvpData.guest_names) && rsvpData.guest_names.length > 0
        ? rsvpData.guest_names.join(" | ")
        : "N/A";

    const csvContent = `Name,Phone,Total Guests,Guest Names,Dietary Requirements,Needs Bus,Submission Date
"${rsvpData.name}","${rsvpData.phone}",${rsvpData.total_guests},"${guestNamesString}","${
      rsvpData.dietary_requirements || "None"
    }","${rsvpData.needs_bus === "yes" ? "Yes" : "No"}","${new Date().toLocaleString()}"`;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email HTML
    const emailHtml = `
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FDF8F5; padding:40px 0; font-family:Arial, sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; border:2px solid #7D2E3D; padding:32px; box-shadow:0 4px 20px rgba(0,0,0,0.05);">
        <!-- Header -->
        <tr>
          <td style="text-align:center; padding-bottom:24px;">
            <h1 style="margin:0; font-size:28px; color:#7D2E3D;">New Wedding RSVP Submission</h1>
            <p style="margin:8px 0 0; font-size:14px; color:#7D2E3D;">Submission Date: ${new Date().toLocaleString()}</p>
          </td>
        </tr>

        <!-- Guest Details -->
        <tr>
          <td style="padding:16px 0;">
            <h2 style="margin:0 0 12px; font-size:20px; color:#7D2E3D; border-bottom:2px solid #7D2E3D; padding-bottom:4px;">Guest Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#4B1A2A;">
              <tr>
                <td style="padding:4px 0; font-weight:bold;">Name:</td>
                <td style="padding:4px 0;">${rsvpData.name}</td>
              </tr>
              <tr>
                <td style="padding:4px 0; font-weight:bold;">Phone:</td>
                <td style="padding:4px 0;">${rsvpData.phone}</td>
              </tr>
              <tr>
                <td style="padding:4px 0; font-weight:bold;">Total Guests:</td>
                <td style="padding:4px 0;">${rsvpData.total_guests}</td>
              </tr>
              <tr>
                <td style="padding:4px 0; font-weight:bold;">Guest Names:</td>
                <td style="padding:4px 0;">${guestNamesString}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Dietary Requirements -->
        <tr>
          <td style="padding:16px 0;">
            <h2 style="margin:0 0 12px; font-size:20px; color:#7D2E3D; border-bottom:2px solid #7D2E3D; padding-bottom:4px;">Dietary Requirements</h2>
            <p style="margin:0; font-size:14px; color:#4B1A2A;">${rsvpData.dietary_requirements || "None"}</p>
          </td>
        </tr>

        <!-- Shuttle Bus -->
        <tr>
          <td style="padding:16px 0;">
            <h2 style="margin:0 0 12px; font-size:20px; color:#7D2E3D; border-bottom:2px solid #7D2E3D; padding-bottom:4px;">Shuttle Bus</h2>
            <p style="margin:0; font-size:14px; color:#4B1A2A;">
              ${rsvpData.needs_bus === "yes" ? "Reserved ✅" : "Not Reserved ❌"}
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="text-align:center; padding-top:24px; font-size:12px; color:#7D2E3D;">
            <p style="margin:0;">Thank you for your RSVP. We look forward to celebrating with you!</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;


    // Send email
    await transporter.sendMail({
      from: `"Wedding RSVP" <${process.env.SMTP_USER}>`,
      to: process.env.RSVP_RECEIVER_EMAIL,
      subject: `New Wedding RSVP from ${rsvpData.name}`,
      html: emailHtml,
      attachments: [{ filename: "wedding-rsvp.csv", content: csvContent }],
    });

    return NextResponse.json(
      {
        success: true,
        message: "RSVP email sent successfully",
      },
      { headers: corsHeaders }
    );
  } catch (error: any) {
    console.error("RSVP Error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Unknown server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
