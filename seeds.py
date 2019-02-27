from app import app, db
from models.distillery import Distillery
from models.whisky import Whisky

with app.app_context():
    db.drop_all()
    db.create_all()

    dalmore = Distillery(
        name='Dalmore Distillery',
        image='https://upload.wikimedia.org/wikipedia/commons/8/86/Scotland_Alness_Dalmore_Distillery.jpg',
        founded=1839,
        town='Alness',
        country='Scotland'
    )
    dalmore.save()

    dalmore_18 = Whisky(
        name='Dalmore 18 Year Old',
        image='https://img.thewhiskyexchange.com/900/dlmob.18yo.jpg',
        age=18,
        description='Dalmore’s trademark style is luscious notes of orange, chocolate and spices, and the 18 Year Old bottling is a terrific example. Aged in both bourbon and sherry casks, it has seductive notes of vanilla, dark chocolate and candied orange on the nose, followed by a full-bodied, spicy palate of cinnamon and stewed fruit.',
        abv=43,
        cask='bourbon, sherry',
        distillery=dalmore
    )
    dalmore_18.save()
