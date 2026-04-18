import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    let reservation = await db.reservation.findUnique({
      where: { id },
      include: {
        lodge: {
          select: {
            name: true,
            location: true,
            address: true,
            phone: true,
            price: true,
            priceUnit: true,
            images: true,
          },
        },
      },
    });

    if (!reservation) {
      return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
    }

    // Auto-expire if past deadline and still pending
    if (
      reservation.status === 'PENDING' &&
      new Date() > reservation.expiresAt
    ) {
      reservation = await db.reservation.update({
        where: { id },
        data: { status: 'EXPIRED' },
        include: {
          lodge: {
            select: {
              name: true,
              location: true,
              address: true,
              phone: true,
              price: true,
              priceUnit: true,
              images: true,
            },
          },
        },
      });
    }

    const parsedImages: string[] = JSON.parse(reservation.lodge.images || '[]');

    return NextResponse.json({
      id: reservation.id,
      shortId: reservation.id.substring(0, 8),
      lodgeId: reservation.lodgeId,
      lodge: {
        name: reservation.lodge.name,
        city: reservation.lodge.location,
        address: reservation.lodge.address,
        phone: reservation.lodge.phone,
        pricePerNight: reservation.lodge.price,
        imageUrl: parsedImages[0] || '',
      },
      userName: reservation.userName,
      userContact: reservation.userContact,
      status: reservation.status,
      createdAt: reservation.createdAt,
      expiresAt: reservation.expiresAt,
    });
  } catch (error) {
    console.error('Error fetching reservation:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reservation' },
      { status: 500 }
    );
  }
}
