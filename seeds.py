from app import app, db
from models.distillery import Distillery
from models.whisky import Whisky
from models.user import User

with app.app_context():
    db.drop_all()
    db.create_all()

    johnny = User(
        username='JohnnyTwoTimes',
        email='twotimes@twotimes.com'
    )
    johnny.save()

    mongoose = User(
        username='Mongoose',
        email='busy@eatingsnakes.com'
    )
    mongoose.save()

    dalmore = Distillery(
        name='Dalmore Distillery',
        # pylint: disable=C0301
        image='https://upload.wikimedia.org/wikipedia/commons/8/86/Scotland_Alness_Dalmore_Distillery.jpg',
        founded=1839,
        town='Alness',
        country='Scotland',
        visited_by=[johnny]
    )
    dalmore.save()

    macallan = Distillery(
        name='Macallan Distillery',
        # pylint: disable=C0301
        image='https://upload.wikimedia.org/wikipedia/commons/8/8d/The_Macallan_Distillery.jpg',
        founded=1824,
        town='Moray',
        country='Scotland'
    )
    macallan.save()

    lakes = Distillery(
        name='The Lakes Distillery',
        # pylint: disable=C0301
        image='https://www.visitcumbria.com/wp-content/gallery/lakesdistillery/lakesdistillery4.jpg',
        founded=2013,
        town='Cumbria',
        country='England'
    )
    lakes.save()

    dalmore_18 = Whisky(
        name='Dalmore 18 Year Old',
        image='https://img.thewhiskyexchange.com/900/dlmob.18yo.jpg',
        price=107,
        age=18,
        # pylint: disable=C0301
        description='Dalmore’s trademark style is luscious notes of orange, chocolate and spices, and the 18 Year Old bottling is a terrific example. Aged in both bourbon and sherry casks, it has seductive notes of vanilla, dark chocolate and candied orange on the nose, followed by a full-bodied, spicy palate of cinnamon and stewed fruit.',
        abv=43,
        cask='Bourbon, Sherry',
        distillery=dalmore,
        tasted_by=[johnny, mongoose]
    )
    dalmore_18.save()

    king_alexander = Whisky(
        name='Dalmore King Alexander III',
        image='https://img.thewhiskyexchange.com/900/dlmob.non3.jpg',
        price=175,
        # pylint: disable=C0301
        description='To make Dalmore King Alexander III, Master Distiller Richard Paterson selected a range of differently aged malts matured in a mixure of French wine casks, Madeira drums, sherry butts, Marsala barrels, port pipes and bourbon barrels from Kentucky. A remarkable feat of blending.',
        abv=40,
        cask='Wine, Madeira, Sherry, Marsala, Port, Bourbon',
        distillery=dalmore,
        tasted_by=[johnny]
    )
    king_alexander.save()

    amber = Whisky(
        name='Macallan Amber',
        image='https://img.thewhiskyexchange.com/900/macob.non32.jpg',
        price=60,
        # pylint: disable=C0301
        description='An, unsurprisingly, amber-coloured dram from Macallan, part of the colour-named 1824 Series. It is matured in sherry casks and chosen to be more fully flavoured than the Gold but more restrained than the Sienna. A great example of what Macallan can do with good-quality oak.',
        abv=40,
        cask='Sherry',
        distillery=macallan
    )
    amber.save()

    steel_bonnets = Whisky(
        name='Lakes Distillery Steel Bonnets',
        image='https://img.thewhiskyexchange.com/900/vatted_lak1.jpg',
        price=60,
        # pylint: disable=C0301
        description='Named for the border reivers who raided indiscriminately along the Anglo-Scottish border during the mid- to late-Middle Ages, Steel Bonnets blends whiskies from both England and Scotland, constructed around a central core of Lakes Distillery single malt. A beautifully-balanced limited-edition comprised of big vanilla and citrus character, a hint of fresh nuttiness and a distant touch of wood smoke.',
        abv=46.6,
        distillery=lakes
    )
    steel_bonnets.save()
